import React, { useState } from "react";
import { Container, FormGroup, Input } from "reactstrap";

const SubiendoImagenes = (props) => {

const [image, setImage] = useState("");
const [loading, setLoading]  = useState(false);

const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Proyecto");
    setLoading(true);
    const res = await fetch(
        "https://api.cloudinary.com/v1_1/dndrldskx/image/upload",
        {
            method: "POST",
            body: data
        }
    )
    const file = await res.json();
   // console.log(res)
    setImage(file.secure_url)
    console.log(file.secure_url)
    setLoading(false)
};


    return (
        <div>
            <Container style = {{textAlign: "center"}}>
        <h1>Subiendo Imagenes</h1>
        <FormGroup> 
            <Input type="file" 
            name="file"
            placeholder="Subir imagen"
             onChange={uploadImage} />
                {loading ? (
                    <h3>Cargando...</h3>
                ) : (
                    <img src={image} style={{width: "300px"}} />
                )}
                
        </FormGroup>
        </Container>
        </div>
    );
    }

export default SubiendoImagenes;