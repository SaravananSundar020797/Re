const apiRequest = async (url = "", optobject = null, errMsg = null) => {
  try {
    const response = await fetch(url,optobject);
    if (!response.ok) {
      throw Error("Please Reload the App");
    }
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};
export default apiRequest;
