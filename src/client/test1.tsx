import {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import Head from '../components/Head'
import CrudIndex from './test/CrudIndex';
//
let pageItems: any[] = [];
//
function Page() {
  const [updatetime, setUpdatetime] = useState<string>("");
  //
  useEffect(() => {
    (async () => {
      testProc();
    })()
  }, []);   
  //
  const testProc = async function(){
    console.log("#testProc");
    const item  = {
      "api_url": "/test/get_list",
      "userId": 0,
    }
console.log(item);  
    const body: any = JSON.stringify(item);		
    const res = await fetch("/api/common/send_post", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},      
      body: body
    });
    const json = await res.json()
    pageItems = json.data;
    setUpdatetime(new Date().toString());
console.log(json.data); 
  }
  //
  const addProc = async function(){
    await CrudIndex.addItem(); 
    location.reload();
    console.log("addProc");
  }
  //
  return (
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl text-gray-700 font-bold my-2">test1.tsx
    </h1>
    <hr />
    <hr className="my-2" />
    <label>Title:</label>
    <input type="text" id="title" 
    className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
    />
    <hr className="my-2" />
    <button onClick={()=>addProc()} className="btn-purple ms-2 my-2">Save</button>

    <hr />
    <p>Test-page</p>
    <hr className="my-2" />
    <button className="btn-purple" onClick={()=>testProc()}>Test
    </button>
    <hr className="my-1" />
    {pageItems.map((item: any ,index: number) => {
    return (
    <div key={index}>
        <h3 className="text-3xl font-bold">{item.title}</h3>
        <span>ID: {item.id}, {item.createdAt}</span>
        <hr />
    </div>
    )
    })}    
  </div>
  );
}

export default Page;
/*
*/