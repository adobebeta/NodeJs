var articles = [
    {
        "articleId": 1,
        "category": "สังคมศาสตร์",
        "subject": "ECONOMICS FOR BUSINESS",
        "stars": "* * * * *",
        "description": "ดีมากๆ เเรียนเกี่ยวกับแนวคิดการทำงานของระบบเศษฐกิจอ่ะไม่มีเช็คชื่อ ส่งงานอย่างเดียว",
        "grade": "A"
    },
    {
        "articleId": 2,
        "category": "สังคมศาสตร์",
        "subject": "ENTREPRENEURSHIP",
        "stars": "* * * *",
        "description": "อาจารย์สอนดี แต่เนื้อหาเยอะ ไม่เหมาะกับคนที่ ไม่ชอบอ่านหนังสือ",
        "grade": "A"
    },
    {
        "articleId": 3,
        "category": "ภาษา",
        "subject": "ENGLISH FOR MARKETING",
        "stars": "* *",
        "description": "เน้นเวิร์คช้อป ไม่เข้าเรียนได้ ส่วนตัวคิดว่าดี แต่ได้ A ยาก",
        "grade": "B"
    }
];

exports.findAll = function() {
    return articles;
};

exports.findById = function (articleId) {
    for (var i = 0; i < articles.length; i++) {
        if (articles[i].articleId == articleId) return articles[i];
    }
};

module.exports = articles;