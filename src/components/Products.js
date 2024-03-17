import react, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Products = () => {

    const [productsData, setProductsData] = useState([]);
    const [userSearchInput, setUserSearchInput] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [sugeestionList, setSuggestionList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://dummyjson.com/products');
            console.log(response.data.products);
            setProductsData(response.data.products);
        }

        fetchProducts();
    }, []);

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Brand',
            selector: row => row.brand,
            sortable: true,
        },
    ];

    const handleSearch = () => {
        if(!userSearchInput){
            return;
        }

        const filteredArray = productsData.filter(item => item.title.toLowerCase() === userSearchInput.toLowerCase());
        console.log(filteredArray);
        if(filteredArray.length > 0){
            //happy scenario
            navigate(`/products/${filteredArray[0].id}`)
        }else{
            //negative scenario
            setErrorMsg('We do not have this product');
        }
    }

    const handleInputChange = (e) => {
        const userData = e.target.value;
        setUserSearchInput(userData);

        const filteredData = productsData.filter(item => item.title.toLowerCase().includes(userData.toLowerCase()));
        setSuggestionList(filteredData);

        if(!userData){
            setErrorMsg('');
        }
    }

    return <>
        <Header />
            <h2>Product Page </h2>
            <input placeholder='Search for product Name' value={userSearchInput} onChange={handleInputChange} />
            <button type='button' onClick={handleSearch}>Search</button>
            {
                errorMsg ? <div>{errorMsg}</div> : null
            }
            <ul>
                {
                    sugeestionList.map(item => <Link to={`/products/${item.id}`}><li>{item.title}</li></Link>)
                }
            </ul>
            <hr />
            <table>
                <tr>
                    <td>Sno</td>
                    <td>Product Name</td>
                    <td>Product Brand</td>
                    <td>Product Category</td>
                    <td>Product Price</td>
                    <td>Stars</td>
                </tr>
                {
                    productsData.map( (item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>
                                <Link to={`/products/${item.id}`}>{item.title}</Link>
                            </td>
                            <td>{item.brand}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>{item.rating}</td>
                        </tr>
                    ))
                }
            </table>
            {/* <DataTable
                columns={columns}
                data={productsData}
                selectableRows
            /> */}
        <Footer />
    </>
}

export default Products;