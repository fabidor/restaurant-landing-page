import jawaJuice from './menuItems/jawajuice.js'
import shawdaClub from './menuItems/shawdaclub.js';
import sicSixLayer from './menuItems/sicsix.js';


const menu = () =>{
    const element = document.createElement('div');
        const header = document.createElement('div');
            header.className="header";
            header.textContent="Menu";
            element.appendChild(header);
        const jawa = jawaJuice();
            element.appendChild(jawa);
        const shawda = shawdaClub();
            element.appendChild(shawda);
        const sicSix = sicSixLayer();
            element.appendChild(sicSix);


    return element;
}

export default menu;