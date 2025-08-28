import FeatureCard from '@/components/FeatureCard';
import FeatureImageCard from '@/components/FeatureImageCard';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full  overflow-hidden md:mt-10 p-4  mb-10 flex flex-col"
    >
      <div className="flex flex-col  ">
        <h2 className="text-5xl vodka-font md:text-7xl text-center font-bold text-black">
          A Feast of Features
        </h2>
        <p className="text-center text-lg">
          Everything You Need to Share, Explore, and Connect
        </p>
      </div>
      <div className="w-full flex flex-col text-black">
        <div className="w-full px-5mb-5  lg:mb-10 pt-10 lg:pt-10  flex-col lg:flex-row flex items-center justify-evenly">
          <FeatureCard
            heading={'Seamless Video Upload & Editing'}
            para={
              'Share your culinary adventures in high quality with ease. Whether you’re showcasing a dish you made at home or reviewing a meal at your favorite restaurant, our platform lets you upload videos effortlessly. Built-in editing tools allow you to trim, enhance, and add captions so your content is engaging and polished before it reaches your audience.'
            }
          />
          <div className="lg:relative mt-20 top-20">
            <FeatureImageCard
              img1="/edit1.png"
              img2="/edit2.png"
              alt1="Delicious Pasta"
              alt2="Tasty Dessert"
            />
          </div>
        </div>
        <div className="w-fullmb-5  lg:mb-10 pt-10 lg:pt-10 px-5   flex-col-reverse lg:flex-row flex  items-center justify-evenly">
          <div className="lg:relative mt-20 top-20">
            <FeatureImageCard
              img1="/profile1.png"
              img2="/profile2.png"
              alt1="Delicious Pasta"
              alt2="Tasty Dessert"
            />
          </div>
          <FeatureCard
            heading={'Personalized User Profiles'}
            para={
              'Create your foodie identity with a customized profile that highlights your videos, reviews, and activity. Showcase your style, favorite cuisines, and top-rated dishes. Followers can explore your culinary journey while you build a community around your unique tastes.'
            }
          />
        </div>
        <div className="w-full px-5mb-5  lg:mb-10 pt-10 lg:pt-10  flex-col lg:flex-row  flex items-center justify-evenly">
          <FeatureCard
            heading={'Followers & Following System'}
            para={
              'Just like TikTok for food lovers, our follower system keeps you connected with fellow foodies. Follow creators whose taste inspires you, and let others follow your delicious content. This mutual connection builds a vibrant network where food recommendations feel personal and authentic.'
            }
          />
          <div className="lg:relative mt-20 top-20">
            <FeatureImageCard
              img1="/follow1.png"
              img2="/follow2.png"
              alt1="Delicious Pasta"
              alt2="Tasty Dessert"
            />
          </div>
        </div>
        <div className="w-fullmb-5  lg:mb-10 pt-10 lg:pt-10 px-5  flex-col-reverse lg:flex-row flex  items-center justify-evenly">
          <div className="lg:relative mt-20 top-20">
            <FeatureImageCard
              img1="/comment1.png"
              img2="/comment2.png"
              alt1="Delicious Pasta"
              alt2="Tasty Dessert"
            />
          </div>
          <FeatureCard
            heading={'Interactive Commenting & Reporting'}
            para={
              'Engage in meaningful conversations around each dish. Comment to share your thoughts, ask questions, or exchange tips with other users. To maintain a respectful space, inappropriate comments can be reported, ensuring the community remains positive and welcoming.'
            }
          />
        </div>
        <div className="w-full px-5mb-5  lg:mb-10 pt-10 lg:pt-10  flex-col lg:flex-row  flex items-center justify-evenly">
          <FeatureCard
            heading={'Advanced Search & Filters'}
            para={
              'Find exactly what you’re craving with our powerful search feature. Search by user, cuisine type, or even location to discover new dishes near you. Filters allow you to browse category-wise, making it easy to uncover hidden gems that match your taste.'
            }
          />
          <div className="lg:relative mt-20 top-20">
            <FeatureImageCard
              img1="/explore1.png"
              img2="/explore2.png"
              alt1="Delicious Pasta"
              alt2="Tasty Dessert"
            />
          </div>
        </div>
        <div className="w-full  pb-15  lg:mb-10 pt-10 lg:pt-10 px-5  flex-col-reverse lg:flex-row flex  items-center justify-evenly">
          <div className="lg:relative mt-20 top-20">
            <FeatureImageCard
              img1="/noti1.png"
              img2="/noti2.png"
              alt1="Delicious Pasta"
              alt2="Tasty Dessert"
            />
          </div>
          <FeatureCard
            heading={'Real-Time Notifications'}
            para={
              'Stay instantly updated on the foodie world around you. Receive real-time notifications when someone follows you, comments on your video, or reacts to your content. Never miss a moment to connect, respond, or celebrate engagement on your posts.'
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
