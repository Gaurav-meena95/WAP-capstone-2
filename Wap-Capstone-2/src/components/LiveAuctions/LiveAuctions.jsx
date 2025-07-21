import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faGavel,
  faUsers,
  faDollarSign,
  faArrowRight,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

// Extended mock auction data with 15+ items
const mockAuctions = [
  {
    id: 1,
    property: "Luxury Beachfront Villa",
    address: "123 Ocean Drive, Malibu, CA",
    currentBid: 1250000,
    startingBid: 800000,
    endTime: Date.now() + 1000 * 60 * 45,
    totalBids: 23,
    bidders: 8,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 2,
    property: "Downtown Penthouse",
    address: "456 Business Ave, New York, NY",
    currentBid: 850000,
    startingBid: 600000,
    endTime: Date.now() + 1000 * 60 * 120,
    totalBids: 15,
    bidders: 5,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 3,
    property: "Mountain Retreat Cabin",
    address: "789 Forest Road, Aspen, CO",
    currentBid: 450000,
    startingBid: 300000,
    endTime: Date.now() + 1000 * 60 * 30,
    totalBids: 31,
    bidders: 12,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 4,
    property: "Historic Townhouse",
    address: "321 Heritage Lane, Boston, MA",
    currentBid: 680000,
    startingBid: 500000,
    endTime: Date.now() + 1000 * 60 * 90,
    totalBids: 18,
    bidders: 7,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 5,
    property: "Modern City Loft",
    address: "567 Urban Street, Chicago, IL",
    currentBid: 320000,
    startingBid: 250000,
    endTime: Date.now() + 1000 * 60 * 60,
    totalBids: 12,
    bidders: 4,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 6,
    property: "Desert Oasis Villa",
    address: "890 Palm Springs Blvd, Scottsdale, AZ",
    currentBid: 920000,
    startingBid: 700000,
    endTime: Date.now() + 1000 * 60 * 75,
    totalBids: 25,
    bidders: 9,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 7,
    property: "Coastal Beach House",
    address: "234 Shore Drive, Miami Beach, FL",
    currentBid: 780000,
    startingBid: 550000,
    endTime: Date.now() + 1000 * 60 * 45,
    totalBids: 20,
    bidders: 6,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 8,
    property: "Lakeside Cottage",
    address: "456 Lake View Road, Lake Tahoe, CA",
    currentBid: 420000,
    startingBid: 300000,
    endTime: Date.now() + 1000 * 60 * 60,
    totalBids: 16,
    bidders: 5,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 9,
    property: "Suburban Family Home",
    address: "789 Oak Street, Denver, CO",
    currentBid: 580000,
    startingBid: 450000,
    endTime: Date.now() + 1000 * 60 * 90,
    totalBids: 22,
    bidders: 8,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 10,
    property: "Urban Condo",
    address: "123 City Center, Austin, TX",
    currentBid: 380000,
    startingBid: 280000,
    endTime: Date.now() + 1000 * 60 * 45,
    totalBids: 14,
    bidders: 4,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 11,
    property: "Mountain View Condo",
    address: "Boulder, CO",
    currentBid: 290000,
    startingBid: 200000,
    endTime: Date.now() + 1000 * 60 * 60,
    totalBids: 10,
    bidders: 3,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 12,
    property: "Oceanfront Luxury Estate",
    address: "Newport Beach, CA",
    currentBid: 2500000,
    startingBid: 1800000,
    endTime: Date.now() + 1000 * 60 * 120,
    totalBids: 15,
    bidders: 6,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 13,
    property: "Downtown Loft Space",
    address: "Seattle, WA",
    currentBid: 320000,
    startingBid: 250000,
    endTime: Date.now() + 1000 * 60 * 60,
    totalBids: 12,
    bidders: 4,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 14,
    property: "Suburban Family Home",
    address: "Denver, CO",
    currentBid: 480000,
    startingBid: 350000,
    endTime: Date.now() + 1000 * 60 * 90,
    totalBids: 20,
    bidders: 7,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    status: "live"
  },
  {
    id: 15,
    property: "Mountain View Condo",
    address: "Boulder, CO",
    currentBid: 290000,
    startingBid: 200000,
    endTime: Date.now() + 1000 * 60 * 60,
    totalBids: 10,
    bidders: 3,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    status: "live"
  }
];

function formatTime(ms) {
  if (ms <= 0) return "00:00:00";
  
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function LiveAuctions() {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [auctions, setAuctions] = useState(mockAuctions);
  const [now, setNow] = useState(Date.now());
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [bidAmount, setBidAmount] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBid = (auctionId) => {
    if (!bidAmount || parseFloat(bidAmount) <= 0) return;
    
    const newBid = parseFloat(bidAmount);
    setAuctions(prev => prev.map(auction => {
      if (auction.id === auctionId && newBid > auction.currentBid) {
        return {
          ...auction,
          currentBid: newBid,
          totalBids: auction.totalBids + 1,
          bidHistory: [
            ...auction.bidHistory,
            { user: "You", amount: newBid, time: Date.now() }
          ]
        };
      }
      return auction;
    }));
    setBidAmount("");
  };

  const getTimeColor = (endTime) => {
    const timeLeft = endTime - now;
    if (timeLeft < 1000 * 60 * 5) return "text-red-500"; // Less than 5 minutes
    if (timeLeft < 1000 * 60 * 15) return "text-yellow-500"; // Less than 15 minutes
    return "text-green-500";
  };

  return (
    <div className="text-white mx-10 max-[432px]:mx-0">
      {/* Header Section */}
      <div className="p-10 mx-10 my-10 bg-[#0e1225b9] max-[432px]:mx-5 max-[432px]:p-5">
        <div className="flex items-center gap-3 mb-5">
          <FontAwesomeIcon icon={faFire} className="text-red-500 text-2xl" />
          <h1 className="text-3xl font-bold">Live Auctions</h1>
        </div>
        <p className="text-lg max-[432px]:text-[15px]">
          Bid on exclusive properties in real-time. Watch the countdown and place your bids before time runs out!
        </p>
      </div>

      {/* Live Auctions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 max-[432px]:mx-5">
        {auctions.map((auction) => (
          <div key={auction.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300">
            {/* Property Image */}
            <div className="relative h-48 bg-gray-800">
              <img 
                src={auction.image} 
                alt={auction.property}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 bg-gray-700 items-center justify-center">
                <span className="text-gray-400">Property Image</span>
              </div>
              
              {/* Live Badge */}
              <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                LIVE
              </div>
              
              {/* Time Remaining */}
              <div className="absolute top-3 right-3 bg-black bg-opacity-75 text-white px-3 py-1 rounded-lg">
                <FontAwesomeIcon icon={faClock} className="mr-1" />
                {formatTime(auction.endTime - now)}
              </div>
            </div>

            {/* Property Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{auction.property}</h3>
              <p className="text-gray-400 text-sm mb-4">{auction.address}</p>
              
              {/* Current Bid */}
              <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Current Bid:</span>
                  <span className="text-2xl font-bold text-green-400">
                    {formatCurrency(auction.currentBid)}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400 text-sm">Starting Bid:</span>
                  <span className="text-gray-300">{formatCurrency(auction.startingBid)}</span>
                </div>
              </div>

              {/* Auction Stats */}
              <div className="flex justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faUsers} />
                  <span>{auction.bidders} bidders</span>
                </div>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faGavel} />
                  <span>{auction.totalBids} bids</span>
                </div>
              </div>

              {/* Bid Input */}
              <div className="flex gap-2 mb-4">
                <input
                  type="number"
                  placeholder="Enter bid amount"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                  min={auction.currentBid + 1000}
                />
                <button
                  onClick={() => handleBid(auction.id)}
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Bid
                </button>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => setSelectedAuction(auction)}
                className="w-full bg-gray-800 hover:bg-gray-700 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                View Details
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Auction Details Modal */}
      {selectedAuction && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{selectedAuction.property}</h2>
                <button
                  onClick={() => setSelectedAuction(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <img 
                src={selectedAuction.image} 
                alt={selectedAuction.property}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Current Bid</div>
                  <div className="text-2xl font-bold text-green-400">
                    {formatCurrency(selectedAuction.currentBid)}
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Time Remaining</div>
                  <div className={`text-2xl font-bold ${getTimeColor(selectedAuction.endTime)}`}>
                    {formatTime(selectedAuction.endTime - now)}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">Bid History</h3>
              <div className="bg-gray-800 rounded-lg p-4 max-h-48 overflow-y-auto">
                {selectedAuction.bidHistory.map((bid, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                    <div>
                      <div className="font-semibold">{bid.user}</div>
                      <div className="text-sm text-gray-400">
                        {new Date(bid.time).toLocaleTimeString()}
                      </div>
                    </div>
                    <div className="text-green-400 font-bold">
                      {formatCurrency(bid.amount)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 