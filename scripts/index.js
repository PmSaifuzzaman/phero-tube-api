const handleCategory = async () => {
    
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();

    const tabContainer = document.getElementById("tab-container");
    data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
            
            <a onclick="handleLoadContent('${category.category_id}')" class="tab">${category.category}</a>
            `;
        tabContainer.appendChild(div);
      });

    console.log(data.data);
    
};

const handleLoadContent = async (categoryId) => {
    console.log(categoryId);
    const response = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    );
    const data = await response.json();
    // console.log(data.data)

    const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  data.data?.forEach((content) => {
    console.log(content);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-base-100 shadow-xl">
    <figure>
      <img
        src=${content?.thumbnail}
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        Biden Pledges Nearly $3 Billion To Ukraine
        <div class="badge badge-secondary p-5">Excellent</div>
      </h2>
      <p>
        Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
        Europe, Joe Biden,
      </p>
      <div class="card-footer flex justify-between mt-8">
        <div class="flex">
          <div>
            <div class="avatar online">
              <div class="w-14 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                />
              </div>
            </div>
          </div>
          <div>
            <h6>Jimmy Dane</h6>
            <small>2022-08-24 17:27:34</small>
          </div>
        </div>
        <div class="card-detaild-btn">
          <button
            class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  </div>
        
        `;

    cardContainer.appendChild(div);
  });    

}



handleCategory();