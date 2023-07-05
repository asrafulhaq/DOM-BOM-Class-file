const posts = [
  {
    id: 1,
    image:
      "https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/347386091_10210245874700486_7071158728256282215_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH_lvt9i5D6BExkI_f64a9TZi_PQNsz_upmL89A2zP-6kaxbRqWX935Jm4N0-UM2o8&_nc_ohc=Tq7KjnnagBUAX8JLZbY&_nc_ht=scontent.fdac157-1.fna&oh=00_AfDL8KEbbb2zyUZAhEoH_ta-91kt0XKDKro2fx2XOtjKrw&oe=649F567C",
    content: "Pari pari bhab... But ki labh...",
    like: 300,
    comment: 20,
    timeAgo: "20 min",
    author: {
      name: "Ekramul Hossain Khan",
      photo:
        "https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/320228180_5894168210641452_5405536298812797588_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGsz-7q_lxCp25BL-WPZkfJZ6-eb3_755Fnr55vf_vnkUu9ns6AwqCwH4l-w0KSq2Q&_nc_ohc=az_SHLxD4lUAX_T4bp_&_nc_ht=scontent.fdac157-1.fna&oh=00_AfBGF3pLhysoCwKv0AJQB8RHRs34T494A7wHl67qgUtcBA&oe=649E79A7",
    },
  },
  {
    id: 2,
    image:
      "https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/356415132_3393169857662410_2444200133106570818_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGwN-MAEDqCZOqcOhJkrOOW-cFZYkaR2hP5wVliRpHaEw18ouMe8vqIZzYfyexPufc&_nc_ohc=H8H-vgiHNWMAX_7gTGy&_nc_ht=scontent.fdac157-1.fna&oh=00_AfC52BIVCetoeO4a4sZBcp1FkatXS_j5IPZqQ78KHcPWvg&oe=649E52AE",
    content: `ইউটিউব ফ্রিল্যান্সিং সিক্রেট যা আমরা জানিনা
    ফ্রিল্যান্সারদের একটা মস্তবড় ভুল হচ্ছে শুধুমাত্র প্রোডাকশন স্কিলেই ফোকাস দেওয়া, আর ক্লায়েন্টের কাজ করা।
    কিন্তু এদিকে সার্ভিস মার্কেটিং করার মত সময় অথবা প্রয়োজনীয়তা আমরা তখনই বুঝি যখন ক্লায়েন্ট পেতেই সমস্যা হয়। 
    কিন্তু আমরা জানিনা যে ইউটিউব কত সহজ একটা মাধ্যম যেখানে সহজে ক্লায়েন্ট পাওয়া সম্ভব।`,
    like: 100,
    comment: 120,
    timeAgo: "10 min",
    author: {
      name: "Prince Chowdhury",
      photo:
        "https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/352674807_3381335602179169_1492129358373873918_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF-8EuzfiZJQqdCY7Z-uCle63S6YZ-eCV7rdLphn54JXqg0jzfEGzGDOa3qhClDD4Q&_nc_ohc=x3Nj9UQ_lW8AX8ydcrE&_nc_ht=scontent.fdac157-1.fna&oh=00_AfAzK8ZHbWEyJ7xAXaYc6qukXjcyKFxf-Fxhg0z6JS8a4w&oe=649E6E93",
    },
  },
  {
    id: 3,
    image:
      "https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/356071279_3576173692706580_6424816543976726262_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEiKTzbhHoyvSQQ9ilK0iFi3x8RaMq_ZxjfHxFoyr9nGGkC1PGmem4NH2aRYpKj4gA&_nc_ohc=ZFMM99wTGw4AX_yESO9&_nc_ht=scontent.fdac157-1.fna&oh=00_AfCyK5XheGwTKmWWa9pi89GXvInGXs3DbxuC285tWLxZqg&oe=649F476A",
    content: `এখানে থাকা কতটুকু নিরাপদ?বাড়িওয়ালা বলছে কোনো সমস্যা নাই,বর্তমান জোয়ারিয়ানালাতে আমিও এই অবস্থায় আছি`,
    like: 900,
    comment: 40,
    timeAgo: "5 min",
    author: {
      name: "Kaisar Cox",
      photo:
        "https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/278289850_3244170285906924_696532670560999528_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFm073qGyr4mNozkLxIEzLxGVpuy4EajOgZWm7LgRqM6PCzYh1zx4Uk7HJLlafDwmA&_nc_ohc=_XCWHw6V984AX9jNY2q&_nc_ht=scontent.fdac157-1.fna&oh=00_AfCE9NtxwpiKuiZoA-7COCtJZrMFwPZpJd_pkxulHszbWQ&oe=649EF1EE",
    },
  },
];
