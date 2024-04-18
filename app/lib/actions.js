import FileUpload from "./components/FileUpload";

async function parseResume(file) {
    "use server"
    try {
        // From file
        const resume = new ResumeParser(file);

        // Convert to JSON Object
        const data = await resume.parseToJSON();
        // console.log(data);
        // Save to JSON File
        const file = data // output subdirectory
        console.log('Yay! ', file.parts);
    } catch (error) {
        console.error(error);
    }
}