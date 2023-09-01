const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();

  const tabContainer = document.getElementById("tab-container");
  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
            
            <a onclick="handleLoadContent('${category.category_id}')" class="tab btn mr-3">${category.category}</a>
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
    <div class="card bg-base-100 shadow-xl h-96">
    <figure>
      <img class="w-full"
        src=${content?.thumbnail}
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
      ${content?.title}
      </h2>
      <p>
      ${content?.others.views}  views
      </p>
      <div class="card-footer flex justify-between mt-8">
        <div class="flex gap-3 items-center">
          <div>
            <div class="avatar online">
              <div class="w-14 rounded-full">
                <img
                src=${content?.authors[0].profile_picture}
                />
              </div>
            </div>
          </div>
          <div>
            <h6>${content?.authors[0].profile_name}</h6>
            
          </div>
          ${
            content?.authors[0].verified
              ? `
              <div class="blue-tik">
                <img
                  src="./images/Verified_Badge.svg.png"
                  alt="Verified Icon"
                  class="h-5 w-5"
                />
              </div>
            `
              : ""
          }
        </div>
        
      </div>
    </div>
  </div>
        
        `;

    cardContainer.appendChild(div);
  });
};

handleCategory();
