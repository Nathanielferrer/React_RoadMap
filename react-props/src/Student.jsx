function Student(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Grade: {props.grade}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

Student.defaultProps = {
    name: "Anonymous",
    age: 0,
    grade: "N/A",
    isStudent: false,
}

export default Student;  