import SearchBar from "./components/SearchBar";
import searchImage from "./api";
import ImageList from "./components/ImageList";
import React from "react";

function App() {
	const [images, setImages] = React.useState([]);

	const handleSubmit = async (term) => {
		const result = await searchImage(term)

		setImages(result);
	}

	return (
		<div>
			<SearchBar onSubmit={handleSubmit}/>
			<ImageList images={images}/>
		</div>
	);
}

export default App;
