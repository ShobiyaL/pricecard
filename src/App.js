// import logo from './logo.svg';
import './App.css';
import PriceCard from "./components/PriceCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
function App() {
  let data=[
    {
      plan:"FREE",
      price:0,
      currency:"$",
    period:"/month",
      features:[
        {
        title:"Single User",
        isEnable:true
      },
      {
        title:"5GB Storage",
        isEnable:true
      },
      {
        title:"Unlimited Public Projects",
        isEnable:true
      },
      {
        title:"Community Access",
        isEnable:true
      },
      {
        title:"Unlimited Private Projects",
        isEnable:false
      },{
        title:"Dedicated Phone Support",
        isEnable:false
      },
      {
        title:"Free Subdomain",
        isEnable:false
      },
      {
        title:"Monthly Status Reports",
        isEnable:false
      }
    ]
  },
  {
    plan:"PLUS",
    price:9,
    currency:"$",
    period:"/month",
    features:[
      {
      title:"5 Users",
      isEnable:true,
      isBold:true
    },
    {
      title:"50GB Storage",
      isEnable:true
    },
    {
      title:"Unlimited Public Projects",
      isEnable:true
    },
    {
      title:"Community Access",
      isEnable:true
    },
    {
      title:"Unlimited Private Projects",
      isEnable:true
    },{
      title:"Dedicated Phone Support",
      isEnable:true
    },
    {
      title:"Free Subdomain",
      isEnable:true
    },
    {
      title:"Monthly Status Reports",
      isEnable:false
    }
  ]
},
{
  plan:"PRO",
  price:49,
  currency:"$",
  period:"/month",
  features:[
    {
    title:"Unlimited Users",
    isEnable:true,
    isBold:true
  },
  {
    title:"150GB Storage",
    isEnable:true
  },
  {
    title:"Unlimited Public Projects",
    isEnable:true
  },
  {
    title:"Community Access",
    isEnable:true
  },
  {
    title:"Unlimited Private Projects",
    isEnable:true
  },{
    title:"Dedicated Phone Support",
    isEnable:true
  },
  {
    title:"Unlimited Free Subdomains",
    isEnable:true
  },
  {
    title:"Monthly Status Reports",
    isEnable:true
  }
]

}];
      
  return (
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
        {
          data.map((element,index)=>{
            return(
              <PriceCard data={element} key={index} />
            )
          })
        }
      </div>
  </div>
</section>
  );
}

export default App;
