const fs = require('fs');

// البيانات التي تريد كتابتها إلى ملف JSON
const data = [
    {
        title: "First Post",
        content: "This is the content of the first post."
    },
    {
        title: "Second Post",
        content: "This is the content of the second post."
    }
];

// تحويل البيانات إلى صيغة JSON
const jsonData = JSON.stringify(data, null, 2);

// كتابة البيانات إلى ملف JSON
fs.writeFile('data.json', jsonData, (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Data successfully written to file');
    }
});
