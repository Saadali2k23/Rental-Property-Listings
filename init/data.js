const sampleData=[
    {
    title: "Exotic Beach Getaway",
    description: "Escape to a tropical paradise with pristine beaches and crystal-clear waters.",
    price:3000,
    location: "Bora Bora",
    country: "French Polynesia",
    image:"https://cdn.pixabay.com/photo/2016/09/07/11/37/tropical-1651423_640.jpg"
    },
 
    {
    title: "Mountain Retreat",
    description: "Experience breathtaking views and serene landscapes in the heart of the mountains.",
    price:6300,
    location: "Aspen",
    country: "United States",
    image: "https://cdn.pixabay.com/photo/2023/08/02/12/47/mountain-8165145_640.jpg"
    },
    {
    title: "City Exploration",
    description: "Immerse yourself in the vibrant culture and bustling streets of a cosmopolitancity.",
    price:5100,
    location: "Tokyo",
    country: "Japan",
    image: "https://cdn.pixabay.com/photo/2022/02/27/22/48/city-7038230_640.jpg"
    },
    {
    
    title: "Historical Adventure",
    description: "Step back in time and discover the rich history of an ancient civilization.",
    price:1000,
    location: "Athens",
    country: "Greece",
    image: "https://media.istockphoto.com/id/1008574568/photo/acropolis-of-athens-at-sunset-with-a-beautiful-dramatic-sky.webp?s=1024x1024&w=is&k=20&c=XO-OpBLsm6h6NlAIwTBy1ZEVKKYjJNgu6Wo8L1BijGI="
    },
    {
    title: "Safari Expedition",
    description: "Embark on an unforgettable journey through the wilderness and encounter majestic wildlife.",
    price:5000,
    location: "Maasai Mara",
    country: "Kenya",
    image: "https://pixabay.com/link/?ua=cd3%3Dimage%26cd7%3Den%253Amasai%2Bmara%253AIND%26ec%3Dapi_ad%26ea%3Dnavigate%26el%3Dgetty%26tid%3DUA-20223345-1%26dr%3Dhttps%253A%252F%252Fpixabay.com%252Fimages%252Fsearch%252Ftokyo%252520night%252520streets%252F&sp=%2524%3Dadvertisement_clicked%26media_type%3Dimage%26user_action%3Dnavigate%26ad_partner%3Dgetty%26ad_content%3Dapi_ad&next=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fafrican-lion-couple-and-safari-jeep-gm478924237-32762190%3Futm_source%3Dpixabay%26utm_medium%3Daffiliate%26utm_campaign%3DSRP_image_sponsored%26utm_content%3Dhttps%253A%252F%252Fpixabay.com%252Fimages%252Fsearch%252Fmasai%252520mara%252520%252F%26utm_term%3Dmasai%2Bmara&hash=1a0179850ac467b534813206a9469612263e4f99&="
    },
    {
    title: "Coastal Getaway",
    description: "Relax and unwind on pristine coastlines with golden sands and turquoise waters.",
    price:3200,
    location:"carabian beach",
    country:"carabian",
    image:"https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386_640.jpg"
    },
    {
    title: "Enchanting Forest Retreat",
    description: "Immerse yourself in the tranquility of lush greenery and discover hidden wonders.",
    price:1200,
    location: "Amazon Rainforest",
    country: "Brazil",
    image: "https://cdn.pixabay.com/photo/2022/07/25/15/16/amazon-7344034_640.jpg"
    },
    {
    title: "Cultural Exploration",
    description: "Immerse yourself in the traditions, art, and history of a vibrant culture.",
    price:3800,
    location: "Rome",
    country: "Italy",
    image: "https://cdn.pixabay.com/photo/2020/03/31/23/27/rome-4989538_640.jpg"
    },
    {
    title: "Island Paradise",
    description: "Escape to a secluded island paradise with pristine beaches and turquoise waters.",
    price:4300,
    location: "Maldives",
    country: "Maldives",
    image: "https://cdn.pixabay.com/photo/2014/06/11/19/47/island-367017_640.jpg"
    },
    {
    title: "Adventure in the Wild",
    description: "Embark on thrilling outdoor activities and explore untouched natural landscapes.",
    price:1500,
    location: "Banff National Park",
    country: "Canada",
    image: "https://cdn.pixabay.com/photo/2021/01/21/09/11/river-5936686_640.jpg"
    },
    {
    title: "Romantic Getaway",
    description: "Indulge in luxury and create unforgettable memories with your loved one.",
    price:8200,
    location: "Santorini",
    country: "Greece",
    image: "https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386_640.jpg"
    },
    {
    title: "Winter Wonderland",
    description: "Experience the magic of snow-covered landscapes and winter activities.",
    price:2800,
    location: "Zerm",
    country:"New zealand",
    image:"https://cdn.pixabay.com/photo/2015/11/21/19/35/winter-1055469_640.jpg"
    },
    {
    title: "Seculated Beach House in Costa Rica",
    description: "Escape to the seculated beach house n the Pecific coast of Costa Rica",
    price:1800,
    location:"Costa Rica",
    country:"Costa Rica",
    image:"https://pixabay.com/link/?ua=cd3%3Dphoto%26cd7%3Den%253Acostarica%253AIND%26ec%3Dapi_ad%26ea%3Dnavigate%26el%3Dgetty%26tid%3DUA-20223345-1%26dr%3Dhttps%253A%252F%252Fpixabay.com%252Fphotos%252Fsearch%252Fwinter%252520wonderland%252F&sp=%2524%3Dadvertisement_clicked%26media_type%3Dimage%26media_subtype%3Dphoto%26user_action%3Dnavigate%26ad_partner%3Dgetty%26ad_content%3Dapi_ad&next=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Farenal-at-dusk-gm1315470777-403431006%3Futm_source%3Dpixabay%26utm_medium%3Daffiliate%26utm_campaign%3DSRP_photo_sponsored%26utm_content%3Dhttps%253A%252F%252Fpixabay.com%252Fphotos%252Fsearch%252Fcostarica%252F%26utm_term%3Dcostarica&hash=4c5464a2c8262f126717d6c820ab470e7e6cae90&=",
}
]
module.exports={data:sampleData}