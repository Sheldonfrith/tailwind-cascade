const twConfig = {};

const theme = {};

function getAllColorNames(theme:any){
    const colors = theme.colors;
    const allNames = [];
    Object.keys(colors).forEach(colorName=>{
        const subNames = Object.keys(colors[colorName]);
        subNames.forEach(subName =>{
            if (subName === 'DEFAULT')
            allNames.push(`${colorName}-${subName}`);
        });
    });
    return allNames;
}