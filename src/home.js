import dinerPhoto from './dinerphoto.png'
import dexPhoto from './dexphoto.png'

const homePage = () => {
    const element = document.createElement('div');
    const homeTitle = document.createElement('div');
    homeTitle.className="header";
    homeTitle.textContent="Home";
    element.appendChild(homeTitle);
    const storeFront = document.createElement('div');
        storeFront.className="infoBox";
        const intro = document.createElement('p');
        intro.className="subHeader";
        intro.textContent="Serving Coruscant Since 22BBY"
        storeFront.appendChild(intro);
        const photo = new Image();
        photo.className = "photo"
        photo.src = dinerPhoto;
        photo.width = 200;
        photo.height = 150;
        storeFront.appendChild(photo);
        element.appendChild(storeFront);
    const dexInfo = document.createElement('div');
        dexInfo.className="infoBox";
        const dexIntro = document.createElement('p');
        dexIntro.className="subHeader";
        dexIntro.textContent="About Dex";
        dexInfo.appendChild(dexIntro);
        const photoScript = document.createElement('div');
            photoScript.className="photoScript";
            const dexPic = new Image();
                dexPic.className="photo";
                dexPic.src = dexPhoto;
                dexPic.width = 200;
                dexPic.height = 150;
                photoScript.appendChild(dexPic);
            const dexStory = document.createElement('p');
                dexStory.textContent="Dex has been serving food to the greater CoCo town region for the better part of 50 years. Priding himself on great food and a NO QUESTIONS ASKED atmosphere, he takes pride on creating an environment where everyone can eat, drink, and have a great time!";
                dexStory.className="genInfo";
                photoScript.appendChild(dexStory);
        dexInfo.appendChild(photoScript);
    element.appendChild(dexInfo);



    return element;
}

export default homePage;