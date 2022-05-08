import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/apiCalls";
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div`
  margin: auto;
  width: 100%;
`;
const BackButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;
const Back = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  align-items: center;
  color: black;
  font-size: 0.9rem;
`;
const Title = styled.h1`
  padding-top: 55px;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const TextContainer = styled.div`
  justify-content: center;
  margin: auto;
  align-items: center;
  display: flex;
`;

const Text = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  flex-wrap: wrap;
  padding: 20px;
`;
const ProductItem = styled.div`
  width: 400px;
`;
const Label = styled.label`
  text-align: left;
  margin: 10px 0;
  font-size: 14px;
`;
const FileInput = styled.input`
  padding: 10px;
`;
const Input = styled.input`
  width: 400px;
  margin: 10px 0;
  padding: 10px;
  text-indent: 10px;
  border-radius: 30px;
  border: 1px solid gray;
`;

const Category = styled.div`
  margin: 10px 0;
`;
const CategoryLabel = styled.label`
  margin: 10px;
  font-size: 16px;
  color: #555;
  cursor: pointer;
`;
const CategoryInput = styled.input`
  margin-top: 10px;
  margin-left: 10px;
  cursor: pointer;
`;
const Action = styled.div``;
const Button = styled.button`
  width: 120px;
  border: none;
  background-color: black;
  color: white;
  margin: 10px 0;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  &:disabled {
    background-color: #f8f8f8;
    color: black;
    cursor: not-allowed;
  }
`;
const NewProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [add, setAdd] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [sizes, setSizes] = useState([]);
    const [colors, setColors] = useState([]);

    const handleInput = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const handleSizes = (e) => setSizes(e.target.value.split(","));
    const handleColors = (e) => setColors(e.target.value.split(","));

    //https://firebase.google.com/docs/storage/web/upload-files?hl=en&authuser=0
    // CODE USED TO CREATE THE FIREBASE ADD PRODUCT

    const arrSizes = sizes?.map((i) => Number(i));
    const handleSubmit = (e) => {
        setAdd(true);
        e.preventDefault();
        setLoading(true);
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (progress) => {
                console.group(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                    const product = {
                        ...inputs,
                        img: downloadURL,
                        size: sizes,
                        color: colors,
                    };
                    addProduct(product, dispatch);
                });
            }
        );
        setTimeout(() => {
            navigate("/products/mens");
        }, 2000);
    };
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>ADD NEW PRODUCT</Title>
            <TextContainer style={{ paddingTop: "20px" }}>
                <BackButton>
                    <Back
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <Text>BACK TO ADMIN ACCOUNT</Text>
                    </Back>
                </BackButton>
            </TextContainer>
            <Wrapper>
                <Form onSubmit={handleSubmit}>
                    <Input
                        name="title"
                        type="text"
                        placeholder="Title"
                        required
                        onChange={handleInput}
                    />
                    <Input
                        name="description"
                        type="description"
                        placeholder="Description of Product"
                        required
                        onChange={handleInput}
                    />
                    <Input
                        name="categories"
                        type="text"
                        placeholder="Categories"
                        required
                        onChange={handleInput}
                    />
                    <Input
                        name="size"
                        type="text"
                        placeholder="Available Size(s)"
                        required
                        onChange={handleSizes}
                    />
                    <Input
                        name="color"
                        type="text"
                        placeholder="Available Colour(s)"
                        required
                        onChange={handleColors}
                    />
                    <Input
                        name="price"
                        type="number"
                        placeholder="Price"
                        required
                        onChange={handleInput}
                    />
                    <ProductItem>
                        <Label>Product Image: </Label>
                        <FileInput
                            name="img"
                            type="file"
                            required
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </ProductItem>
                    <Action>
                        <Button type="submit" disabled={loading ? true : false}>
                            Add Product
                        </Button>
                    </Action>
                </Form>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};
export default NewProduct;