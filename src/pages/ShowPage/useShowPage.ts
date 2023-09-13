import axios from "axios";
import { useEffect, useState } from "react";

function useShowPage() {
  const [showData, setShowData] = useState(false);

  const handleButtonClick = () => {
    setShowData(true);
  };

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const fetchedLatitude = position.coords.latitude;
          const fetchedLongitude = position.coords.longitude;
          setLatitude(fetchedLatitude);
          setLongitude(fetchedLongitude);

          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${fetchedLatitude}&lon=${fetchedLongitude}`;

          axios
            .get(url)
            .then((response) => {
              setAddress(response.data.display_name);
            })
            .catch(() => {
              setData("Error fetching city name");
            });
        },
        () => {
          setData("Error getting geolocation");
        }
      );
    } else {
      setData("Geolocation is not supported by this browser.");
    }
  }, []);

  return { showData, handleButtonClick, latitude, longitude, address, data };
}

export default useShowPage;
