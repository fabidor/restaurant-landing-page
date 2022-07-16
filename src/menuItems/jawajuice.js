import juicePic from '../jawamilk.png';

const jawaJuice = () => {
    const element = document.createElement('div');
    element.className="infoBox";
    const juiceTitle=document.createElement('div');
        juiceTitle.className="subHeader";
        juiceTitle.textContent="Jawa Juice";
        element.appendChild(juiceTitle);
    const juiceBox = document.createElement('div');
        juiceBox.className="photoScript";
        const jawaJuicePic = new Image();
            jawaJuicePic.className="photo";
            jawaJuicePic.src=juicePic;
            jawaJuicePic.width=150;
            jawaJuicePic.height=200;
            juiceBox.appendChild(jawaJuicePic);
        const jawaJuiceInfo=document.createElement('div');
            jawaJuiceInfo.className="genInfo";
            jawaJuiceInfo.textContent="A delicious juice made from milking a Bantha. Drank by Obi Wan Himself!"
            juiceBox.appendChild(jawaJuiceInfo);
        element.appendChild(juiceBox);
        return element;
}

export default jawaJuice;