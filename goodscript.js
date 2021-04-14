const readline = require('readline');
    const fs = require('fs');
    const FILE_PATH = 'good.txt';
    
    module.exports = async () =>
    {
        const linesCount = await getLinesCount();
        const randomLineIndex = Math.floor(Math.random() * linesCount);
        const content = await getLineContent(randomLineIndex);
        return content;
    };
    
    //
    // HELPERS
    //
    
    function getLineReader()
    {
        return readline.createInterface({
            input: fs.createReadStream(FILE_PATH)
        });
    }
    
    async function getLinesCount()
    {
        return new Promise(resolve =>
        {
            let counter = 0;
            getLineReader()
            .on('line', function (line)
            {
                counter++;
            })
            .on('close', () =>
            {
                resolve(counter);
            });
        });
    }
    
    async function getLineContent(index)
    {
        return new Promise(resolve =>
        {
            let counter = 0;
            getLineReader().on('line', function (line)
            {
                if (counter === index)
                {
                    resolve(line);
                }
                counter++;
            });
        });
    }window.print()
