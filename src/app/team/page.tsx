import MemberCard from "@/components/Team/MemberCard"; // Adjust the import path as needed

const Team: React.FC = () => {
  return (
    <div>
      <div className="bg-black min-h-screen md:pt-20 pt-20 md:px-14 px-10 flex flex-col">
        <h1 className="font-montserratB text-white text-3xl py-5">
          Co-ordinators
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3 gap-y-10">
          <MemberCard
            name="Dr. Mustafa Basthikodi"
            role="Faculty Co-ordinator"
            imageSrc="https://avatars1.githubusercontent.com/srajankumar"
          />
        </div>
        <h1 className="font-montserratB text-white text-3xl py-5">
          Core Members
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3 gap-y-10">
          <MemberCard
            name="Deveesh Shetty"
            role="President"
            imageSrc="https://avatars1.githubusercontent.com/Deveesh-Shetty"
          />
          <MemberCard
            name="Varshaa Shetty"
            role="Vice President"
            imageSrc="https://avatars1.githubusercontent.com/shettyvarshaa"
          />
          <MemberCard
            name="Tejas Nayak B"
            role="General Secretary"
            imageSrc="https://avatars1.githubusercontent.com/tejasnayak1"
          />
          <MemberCard
            name="Srajan Kumar"
            role="Web Lead"
            imageSrc="https://avatars1.githubusercontent.com/srajankumar"
          />
          <MemberCard
            name="Tejas GK"
            role="Web Lead"
            imageSrc="https://avatars1.githubusercontent.com/tejas-gk"
          />
          <MemberCard
            name="Tejas Nayak"
            role="Member"
            imageSrc="https://avatars1.githubusercontent.com/TejasNayak42"
          />
        </div>
        <h1 className="font-montserratB text-white text-3xl py-5">Alumni</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3 gap-y-10">
          <MemberCard
            name="Deveesh Shetty"
            role="President"
            imageSrc="https://avatars1.githubusercontent.com/Deveesh-Shetty"
          />
          <MemberCard
            name="Varshaa Shetty"
            role="Vice President"
            imageSrc="https://avatars1.githubusercontent.com/shettyvarshaa"
          />
          <MemberCard
            name="Tejas Nayak B"
            role="General Secretary"
            imageSrc="https://avatars1.githubusercontent.com/tejasnayak1"
          />
          <MemberCard
            name="Srajan Kumar"
            role="Web Lead"
            imageSrc="https://avatars1.githubusercontent.com/srajankumar"
          />
          <MemberCard
            name="Tejas GK"
            role="Web Lead"
            imageSrc="https://avatars1.githubusercontent.com/tejas-gk"
          />
          <MemberCard
            name="Tejas Nayak"
            role="Member"
            imageSrc="https://avatars1.githubusercontent.com/TejasNayak42"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
