import React from "react";
import PropTypes from "prop-types";

function WhiteBox({ backgroundColor, padding, borderRadius,width, imageSrc, altText, contentRight, contentBelow, cc, img }) {
  const boxStyle = {
    backgroundColor: backgroundColor || "white",
    padding: padding || "20px",
    borderRadius: borderRadius || "4px",
    width: "620px",
    display: "flex",
    hieght:width,
  };

  const imageStyle = {
    width: "60px",
    height: "70px",
    backgroundColor: "lightgray",
  };

  const contentContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px", // Add space between the image and content
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: "1rem",
    fontWeight: 300,
  };

  return (
    <div style={boxStyle} >
      <a href={img} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={altText} style={imageStyle} />
      </a>
      <div style={contentContainerStyle}>
        {/* Content to the right of the image */}
        <div>
          {contentRight && <p>{contentRight}</p>}
        </div>
        {/* Content below the image */}
        <div>
          {contentBelow && <p>{contentBelow}</p>}
        </div>
        {/* Additional content */}
        {cc}
      </div>
    </div>
  );
}

WhiteBox.propTypes = {
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  contentRight: PropTypes.string,
  contentBelow: PropTypes.string,
  cc: PropTypes.string, // Additional content
  img: PropTypes.string,
};

function App() {
  // Array of objects with different props for WhiteBox
  const whiteBoxes = [
    {
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "6px",
      imageSrc: "https://ubisysresearch.github.io/img/chase2023.png",
      altText: "Image 1",
      contentRight: <h4>Exploring Earables to Monitor Temporal Lack of Focus during Online Meetings to Identify Onset of Neurological Disorders</h4>,
      contentBelow: "to appear in the proc. of 2023 IEEE/ACM International Conference on Connected Health: Applications, Systems and Engineering Technologies (CHASE)",
      cc: <h5>Garvit Chugh, Suchetana Chakraborty and Sandip Chakraborty</h5>,
      img: "https://ubisysresearch.github.io/#",
      
    },
    {
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "8px",
      imageSrc: "https://ubisysresearch.github.io/img/legalhelper.png",
      altText: "Image 2",
      contentRight: <h4>Demonstration of LegalHelper: A Low-cost tool for Smart Translation and Creation of Legal Contracts</h4>,
      contentBelow: "Demo Paper to appear in the proc. of COMSNETS 2023",
      cc: <h5>Garvit Chugh and Suchetana Chakraborty</h5>,
      img: "https://ubisysresearch.github.io/publication/molevolvr_webapp/",
     
    },
    {
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "6px",
      imageSrc: "https://ubisysresearch.github.io/img/chase2023.png",
      altText: "Image 1",
      contentRight: <h4>enVolve+: Inertial Sensing to Reinforce Involvement of Silent Listeners during an Online Interaction</h4>,
      contentBelow: "Poster Paper to appear in the proc. of COMSNETS 2023",
      cc: <h5>Garvit Chugh, Suchetana Chakraborty and Sandip Chakraborty</h5>,
      img: "hhttps://ubisysresearch.github.io/publication/molevolvr_webapp/",
    },
    {
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "8px",
      imageSrc: "https://ubisysresearch.github.io/img/legalhelper.png",
      altText: "Image 2",
      contentRight: <h4>crossTrustChain: CrossChain Interoperability using Multivariate Trust Models</h4>,
      contentBelow: "To appear in the proc. of COMSNETS Cybersecurity and Privacy Workshop 2023",
      cc: <h5>Dhruv Avinash Patel, Harsh Anand and Suchetana Chakraborty,</h5>,
      img: "https://ubisysresearch.github.io/publication/molevolvr_webapp/"
    },
    // Add more objects as needed for additional WhiteBoxes
  ];
  const project=[
    {
          backgroundColor: "white",
      padding: "30px",
      borderRadius: "6px",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfY6mzNSZaH0RjKRIc5-1i6BKjT8rYMdxs6UDeGjRtEuSwtbjpqNSwoxzvfHlOQgSRg7k&usqp=CAU",
      altText: "Image 1",
      contentRight: <h4>ConSenseHAR: Decentralized collaborative context sensing towards pervasive Human Activity Recognition.</h4>,
      contentBelow: "Role: PI. Cost: Rs. 29 Lakhs, Core Research Grant, SERB, DST",   
    },
    {
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "8px",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfY6mzNSZaH0RjKRIc5-1i6BKjT8rYMdxs6UDeGjRtEuSwtbjpqNSwoxzvfHlOQgSRg7k&usqp=CAU",
      altText: "Image 2",  
      contentRight: <h4>SensePod: An AIoT based testbed to promote Sensing as a Service for ambient living.</h4>,
      contentBelow: "Role: PI. Cost: 41.9 Lakhs. Sponsoring Agency: SEED Grant, IIT Jodhpur, 2022.",    
    },
    {
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "8px",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfY6mzNSZaH0RjKRIc5-1i6BKjT8rYMdxs6UDeGjRtEuSwtbjpqNSwoxzvfHlOQgSRg7k&usqp=CAU",
      contentRight: <h4>Detecting behavioural health disorders of older adults using self supervised learning and casual reasoning.</h4>,
      contentBelow: "Sponsoring Agency: NSF-TIH Indo-USA Joint Collaboration Program. TIH ISI Kolkata. Role: Co-PI. Cost: 69.90 Lakhs",
    },
    {
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "8px",
      contentRight: <h4>Design of a Cuffless Continuous BP Monitoring Device.</h4>,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfY6mzNSZaH0RjKRIc5-1i6BKjT8rYMdxs6UDeGjRtEuSwtbjpqNSwoxzvfHlOQgSRg7k&usqp=CAU",
      contentBelow: "Role: Co-PI. Cost: 18Lakhs. Sponsoring Agency: Johari Digital Healthcare Ltd. 2021-2022",
    },{
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "8px",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfY6mzNSZaH0RjKRIc5-1i6BKjT8rYMdxs6UDeGjRtEuSwtbjpqNSwoxzvfHlOQgSRg7k&usqp=CAU",
      contentRight: <h4>Inventorization of the wildlife towards a sustainable campus.</h4>,
      contentBelow: "Role: PI. Cost: 2Lakhs. Sponsoring Agency: CETSD Campus Sustainability Program, IIT Jodhpur (JCKIC) 2021-2022",
    },{
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "8px",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfY6mzNSZaH0RjKRIc5-1i6BKjT8rYMdxs6UDeGjRtEuSwtbjpqNSwoxzvfHlOQgSRg7k&usqp=CAU",
      contentRight: <h4>Demonstration Centre for Smart Graded-Water Supply Grid.</h4>,
      contentBelow: "Role: Co-PI. Cost: 40 Lakhs. Sponsoring Agency: JCKIC",
    },
  ];
  const whiteBoxe = [
    {
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "6px",
      imageSrc: "https://ubisysresearch.github.io/img/UniPreCIS.png",
      altText: "Image 1",
      contentRight: <h4>UniPreCIS : A data pre-processing solution for collocated services on shared IoT</h4>,
      contentBelow: "Networking and Internet Architecture, ArXiv",
      cc: <h5>Anirban Das, Navlika Singh, Suchetana Chakraborty</h5>,
      img: "https://arxiv.org/abs/2208.01394",
      
    },
    {
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "8px",
      imageSrc: "https://ubisysresearch.github.io/img/mec.png",
      altText: "Image 2",
      contentRight: <h4>A survey of mobility aware Multi-access Edge Computing: Challenges, use cases and future directions</h4>,
      contentBelow: "Ad Hoc Networks, Elsevier (2022): 103044",
      cc: <h5>Ramesh Singh, Radhika Sukapuram, Suchetana Chakraborty</h5>,
      img: "https://www.sciencedirect.com/science/article/pii/S1570870522002165?via%3Dihub",
     
    },
    {
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "6px",
      imageSrc: "https://ubisysresearch.github.io/img/mydatagoeswhere.jpg",
      altText: "Image 1",
      contentRight: <h4>Where Do All My Smart Home Data Go? Context-aware Data Generation and Forwarding for Edge-based Microservices over Shared IoT Infrastructure</h4>,
      contentBelow: "Future Generation Computer Systems, Elsevier",
      cc: <h5>Anirban Das, Sandip Chakraborty, Suchetana Chakraborty</h5>,
      img: "https://doi.org/10.1016/j.future.2022.03.027",
    },
    {
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "8px",
      imageSrc: "https://ubisysresearch.github.io/img/deep.png",
      altText: "Image 2",
      contentRight: <h4>Deep Unsupervised Methods towards Behavior Analysis in Ubiquitous Sensor Data</h4>,
      contentBelow: "Internet of Things Journal, Elservier",
      cc: <h5>Manan Sharma, Shivam Tiwari, Gaurav Ruhela, Suchetana Chakraborty, Dip Sankar Banerjee</h5>,
      img: "https://ubisysresearch.github.io/publication/molevolvr_webapp/"
    },
    // Add more objects as needed for additional WhiteBoxes
  ];

  // Split whiteBoxes into pairs for columns
  const column1 = whiteBoxes.slice(0, Math.ceil(whiteBoxes.length / 2));
  const column2 = whiteBoxes.slice(Math.ceil(whiteBoxes.length / 2));
  const column3 = whiteBoxe.slice(0, Math.ceil(whiteBoxe.length / 2));
  const column4 = whiteBoxe.slice(Math.ceil(whiteBoxe.length / 2));
  const column5=project.slice(0,Math.ceil(project.length / 2));
  const column6=project.slice(Math.ceil(project.length / 2));

  return (
    <div>
    <div>
      <h1 style={{ color: "white" }}>Recent Conference Proceedings</h1>
      <div style={{ display: "flex", gap: "17px", flexWrap: "wrap" }}>
        {column1.map((props, index) => (
          <div key={index} style={{ flex: 1, marginBottom: "10px" }}>
            <WhiteBox {...props} />
          </div>
        ))}
        {column2.map((props, index) => (
          <div key={index} style={{ flex: 1, marginBottom: "10px" }}>
            <WhiteBox {...props} />
          </div>
        ))}
        <p>
        <div style={{ marginLeft: "550px" }}>
  <a href="https://sites.google.com/site/suchetana0116/publications" style={{ color: "blue" }} className="underline-link">
    <span
      style={{ color: 'blue', textDecoration: 'none' }}
      onMouseOver={(e) => e.target.style.textDecoration = 'underline blue'} // Set underline color to blue on mouse over 
      onMouseOut={(e) => e.target.style.textDecoration = 'none'} 
    >
      See All Generals
    </span>
  </a>
</div>




  
</p>

</div>
</div>
    <div>
    <h1 style={{ color: "white" }}>Recent Journal Publications</h1>
      <div style={{ display: "flex", gap: "17px", flexWrap: "wrap" }}>
        {column3.map((props, index) => (
          <div key={index} style={{ flex: 1, marginBottom: "10px" }}>
            <WhiteBox {...props} />
          </div>
        ))}
        {column4.map((props, index) => (
          <div key={index} style={{ flex: 1, marginBottom: "10px" }}>
            <WhiteBox {...props} />
          </div>
        ))}
        
        <div style={{ marginLeft: "550px" }}>
  <a href="https://sites.google.com/site/suchetana0116/publications" style={{ color: "blue" }} className="underline-link">
    <span
      style={{ color: 'blue', textDecoration: 'none' }}
      onMouseOver={(e) => e.target.style.textDecoration = 'underline blue'} // Set underline color to blue on mouse over 
      onMouseOut={(e) => e.target.style.textDecoration = 'none'} 
    >
      See All Generals
    </span>
  </a>
</div>
    </div>
    </div>
  <div>
    
  </div>
  <div>
    <h1 style={{ color: "white" }}>Projects</h1>
      <div style={{ display: "flex", gap: "17px", flexWrap: "wrap" }}>
        {column5.map((props, index) => (
          <div key={index} style={{ flex: 1, marginBottom: "10px" }}>
            <WhiteBox {...props} />
          </div>
        ))}
        {column6.map((props, index) => (
          <div key={index} style={{ flex: 1, marginBottom: "10px" }}>
            <WhiteBox {...props} />
          </div>
        ))}
        <div style={{ marginLeft: "550px" }}>
  <a href="https://sites.google.com/site/suchetana0116/research" style={{ color: "blue" }} className="underline-link">
    <span
      style={{ color: 'blue', textDecoration: 'none' }}
      onMouseOver={(e) => e.target.style.textDecoration = 'underline blue'} // Set underline color to blue on mouse over 
      onMouseOut={(e) => e.target.style.textDecoration = 'none'} 
    >
      SEE ALL PROJECTS 
    </span>
  </a>
</div>
    </div>
    </div> 
    
    
    </div>
  );
}

export default App;
