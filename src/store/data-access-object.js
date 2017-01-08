var dao = module.exports = {};

dao.ddd = (year, month) => {
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, 1000, "hi i got fuck data yeah on " + year + '/' + month);
    })
}