import React from 'react';

const ServicesAndStatsComponent = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', padding: '20px' }}>
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Now Find your lawyer instantly!</h1>
        <p>Quick & Fast appointment</p>
      </div>

      {/* Service Fields */}
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>We have lawyers from several fields</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', marginBottom: '50px' }}>
          {/* Service Categories would go here */}
          <div>Immigration</div>
          <div>Employment</div>
          <div>Tax Service</div>
          <div>Real Estate</div>
          <div>Criminal</div>
          <div>Financial</div>
          <div>Medical & Injury</div>
        </div>
      </div>

      {/* Recommendations */}
      <div style={{ marginTop: '50px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Recommendation</h2>
        <p style={{ textAlign: 'center' }}>With our services, we have assisted over 1,000 newcomers. These are a few of their suggestions.</p>
        {/* Testimonials would go here */}
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
          <blockquote>
            "I had a complex immigration case, but the Immigration Service guided me through the entire process with professionalism and expertise..."
            <span>- SuperL</span>
          </blockquote>
          <blockquote>
            "I had a great experience with XYZ Tax Services. Their knowledgeable staff helped me understand the local tax regulations..."
            <span>- SuperA</span>
          </blockquote>
        </div>
      </div>

      {/* Impact */}
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h2>Our Impact</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', marginTop: '30px' }}>
          <div>
            <h3>50+</h3>
            <p>Lawyers</p>
          </div>
          <div>
            <h3>1000+</h3>
            <p>Members</p>
          </div>
          <div>
            <h3>800+</h3>
            <p>Cases Solved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAndStatsComponent;
