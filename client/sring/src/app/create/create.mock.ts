import { BookOptions, Genders } from "./create.data";

export const BookOptionsMock: BookOptions = {
    themes: [
        { id: '1', genderID: Genders.male, title: 'Cars', imageUrl: 'https://png.pngtree.com/element_origin_min_pic/17/07/05/6f7b8dd55e1a0b2dbc15e26efe42856e.jpg'},
        { id: '2', genderID: Genders.male, title: 'Minions', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP9IemB8Rb8OHxct-HWoW4R9gK-Yj7Xf8VBOr7KXDsLDu4sUOc'},
        { id: '3', genderID: Genders.male, title: 'Super Heroes', imageUrl: 'http://weclipart.com/gimg/0E4280E047EA1C00/spiderman-super-her-is-cutes-j5rqziteqhncm-minus-super-roes.jpg'},
        { id: '4', genderID: Genders.male, title: 'Soldiers', imageUrl: 'https://png.pngtree.com/element_origin_min_pic/16/12/31/40d6d260d7c55129d40ffd20bf5cb181.jpg'},
        { id: '5', genderID: Genders.female, title: 'Princesses', imageUrl: 'https://orig00.deviantart.net/5de7/f/2014/233/d/1/d1aef5cecf74e5a9234d8c3ae94b7de7-d7d7uek.png'},
        { id: '6', genderID: Genders.female, title: 'Barbies', imageUrl: 'https://png.pngtree.com/element_origin_min_pic/17/04/01/472390c793abfcab53a7c95461676f4f.jpg'},
        { id: '7', genderID: Genders.female, title: 'Animals', imageUrl: 'http://coloringkids.org/wp-content/uploads/lion-picture.jpg'},
        { id: '8', genderID: Genders.female, title: 'Babies', imageUrl: 'http://clipartstation.com/wp-content/uploads/2017/11/baby-clipart-m%C3%A4dchen-4.jpg'},
    ],
    styles: [
        { id: '1', genderIDs: [Genders.male, Genders.female], themeIDs: ['1', '3', '5', '7'], title: 'Naive', imageUrl: 'https://www.artistsnetwork.com/wp-content/uploads/2015/05/3515.Birds-song-for-the-first-snow.jpg'},
        { id: '2', genderIDs: [Genders.male, Genders.female], themeIDs: ['2', '4', '6', '8'], title: 'Child-like', imageUrl: 'https://render.fineartamerica.com/images/rendered/search/print/images/artworkimages/medium/1/happi-arte-2-boy-fish-art-sharon-cummings.jpg'},
        { id: '3', genderIDs: [Genders.male, Genders.female], themeIDs: ['1', '4', '5', '8'], title: 'Comics art', imageUrl: 'https://i.pinimg.com/736x/5d/e1/81/5de181a44929a515a1e576ed3dc4791a--captain-america-drawing-captain-america-wallpaper.jpg'},
    ],
    types: [
        { id: '1', title: 'Hard cover', imageUrl: 'https://i.pinimg.com/originals/4c/51/32/4c51326e90e7e03b711feca2ab93cb37.jpg'},
        { id: '2', title: 'Soft cover', imageUrl: 'https://pictures.abebooks.com/SETANTABOOKS/12695276054.jpg'},
        { id: '3', title: 'Album', imageUrl: 'https://i.pinimg.com/originals/5e/1a/0b/5e1a0bf5d07e4793020485f8fa5aad29.jpg' },
    ],
}
