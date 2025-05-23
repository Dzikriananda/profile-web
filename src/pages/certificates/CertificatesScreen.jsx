

function CertificatesScreen(){
    return(
        <div>
            <ExperienceCard/>
        </div>
    );
}

const ExperienceCard = (props) => {
    return (
      <div className="w-full max-w-[800px] mx-auto px-4 py-8 bg-gray-100 text-center rounded-lg shadow">
      <p className="text-gray-800 break-words">
        This box is responsive and maxes out at aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </p>
    </div>
    );
  };


export default CertificatesScreen;