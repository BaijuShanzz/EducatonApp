import './Plans.css'
function Plans (){
    const pricingData = [
        {
        title: "Regular Member",
        price: "$0",
        duration: "/month",
        color: '#fff',
        feature : [
            'Unlimited acess to the course',
            'Customer support',
            'personal Mentor',
            'Standard question',
            '5 classes per week'
        ]
    },{
        title: "Perimun Member",
        price: "$100",
        duration: "/month",
        color: '#6f55f2',
        feature : [
            'Unlimited acess to the course',
            'Customer support',
            'personal Mentor',
            'Standard question',
            '5 classes per week'
        ]
    },
    {
        title: "Standered Member",
        price: "$10",
        duration: "/month",
        color: '#fff',
        feature : [
            'Unlimited acess to the course',
            'Customer support',
            'personal Mentor',
            'Standard question',
            '5 classes per week'
        ]
    }
]
    return(
        <>
        <div className="container">
            <div className="pricing-top">
                <h2 className='section-title'>
                    Premium Pricing Plan
                </h2>
                <p>Unlock elite tech servies with our priemun plan and soar ahead of the competition</p>
            </div>
            <div className="pricing-wrapper">
                {
                    pricingData.map((pricingItem, index)=>(
                        <div className="pricing-item" key={index} >
                            <div className="pricing-card-top" style={{background: pricingItem.color}}>
                                <h2 className="price hading">
                                    {pricingItem.title}
                                </h2>
                                <h2 className="pricing-section-title">
                                    {pricingItem.price}  <span>{pricingItem.duration}</span>
                                </h2>
                                
                            </div>
                            <hr />
                            <div className="services">
                                <ul>
                                    {
                                        pricingItem.feature.map((feature,index)=>(
                                            <li key={index}>{feature}</li>
                                        ))
                                    }
                                </ul>
                                <button className="register-btn">Join</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    );
};
export default Plans;