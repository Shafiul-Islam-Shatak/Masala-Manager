
const RectangleImage = () => {
    return (
        <div className="grid grid-cols-2 gap-5 rotate-[30deg] w-3/4 ">
            <div className="hover:scale-105">
                <img className="rounded-3xl" src="https://img.freepik.com/free-photo/top-view-fried-chicken-with-sauce-french-fries_23-2148646626.jpg?t=st=1715686095~exp=1715689695~hmac=b8f0e6a3ad4b46b21eb9a4f568b02c31c24b868927952057da89bd87e9ea25bf&w=900" alt=""  />
            </div>
            <div className="hover:scale-105">
                <img className="rounded-3xl" src="https://img.freepik.com/premium-photo/indian-food-thali-indian-style-meal-breakfast_788160-714.jpg?w=900" alt=""  />
            </div>
            <div className="hover:scale-105">
                <img className="rounded-3xl" src="https://img.freepik.com/premium-photo/dim-sum-dumplings-steamed-chinese-buns-dumplings-jiaozi-dimsum-momo-abstract-generative-ai-illustration_162695-8162.jpg?w=900" alt=""  />
            </div>
            <div className="hover:scale-105">
                <img className="rounded-3xl" src="https://img.freepik.com/free-photo/authentic-italian-pasta_24972-2334.jpg?t=st=1715686007~exp=1715689607~hmac=033db85c9bb29571ec9665ba93157b0fc2e767c2e96b82410125214bb8f9ca4a&w=900" alt=""  />
            </div>
        </div>
    );
};

export default RectangleImage;