

import Directory from "../../components/directory/directory";
const Home = () => {
    const sections = [
        {
            id: 1,
            title: 'mens',
            imageUrl: 'https://i.ibb.co/kKb12Fy/Mens.jpg',
            linkUrl: 'collections/mens'
        },
        {
            id: 2,
            title: 'womens',
            imageUrl: 'https://i.ibb.co/Lz5yCWm/Womens.jpg',
            linkUrl: 'collections/womens'
        },
        {
            id: 3,
            title: 'kids',
            imageUrl: 'https://i.ibb.co/WvGQqck/Kids.jpg',
            linkUrl: 'collections/kids'
        },
        {
            id: 4,
            title: 'sunglasses',
            imageUrl: 'https://i.ibb.co/SBqk7zd/Sg2.jpg',
            size: 'large',
            linkUrl: 'collections/sunglasses'
        },
        {
            id: 3,
            title: 'shoes',
            imageUrl: 'https://i.ibb.co/th5wvRJ/sh1.jpg',
            size: 'large',
            linkUrl: 'collections/shoes'
        }
    ];

    return (
        <Directory sections={sections} />
    );
};

export default Home;