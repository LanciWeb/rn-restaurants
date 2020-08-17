import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer JGNzX4K8Vrt52qSdjpufdNPBvC2Nf0b75YKATnuwA4HFaT1cH9OYDqP4Sdp9-YA5S2BAcQLDxpooH_WaedlUlFV9hbcufvbnJrWXiDOA0HwM3QMMjV0oFknZEt84X3Yx',
  },
});
