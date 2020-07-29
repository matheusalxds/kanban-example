import prepareData from './prepare-data';

export default (data) => ({
  ...(data && data.length && { new: prepareData(data, 'new') }),
  ...(data && data.length && { contacted: prepareData(data, 'contacted') }),
  ...(data && data.length && { sent: prepareData(data, 'sent') }),
})
