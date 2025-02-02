export const Practices=()=>{
    const students=[1];
    return(
        <>
        <p>{students.length==0 && "No students found"}</p>
        <p>Number of Students:{students.length}</p>
        </>
    );
};