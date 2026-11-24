function productstore(){

    return(
        <>
        <div className="mt-4">
        <div className="border border-grey w-full rounded-md bg-blue-200 p-10">
<h1 className="text-center font-bold">My Store</h1>
<br />
<h2 className="text-left font-semibold">Our Products</h2>
<br />
<div className=" flex items-center justify-center flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-9 ">

<div className=" p-4 sm: p-5 md: p-7 lg
:p-9 border border-grey mr-20 rounded-md ml-10">
    <p>Laptop</p>
    <p>$50,000</p>
    <button className=" border border-grey-400 rounded-md p-1">Add Cart</button>
</div>

<div className=" p-4 sm: p-5 md: p-7 lg
:p-9 border border-grey mr-20 rounded-md ml-10">
    <p>Phone</p>
    <p>$25,000</p>
    <button className=" border border-grey-400 rounded-md p-1 ">Add Cart</button>
</div>

<div className=" p-4 sm: p-5 md: p-7 lg
:p-9 border border-grey mr-20 rounded-md ml-10">
    <p>iPode</p>
    <p>$25,000</p>
    <button className=" border border-grey-400 rounded-md p-1 bg-black-200">Add Cart</button>
</div>

</div>


</div>
<div className="w-full p-4 text-white bg-black rounded-md">
    <p className="text-center ">@productstore</p>
</div>
</div>
        </>

    )
}
export default productstore