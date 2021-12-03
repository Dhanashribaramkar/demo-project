// const Joi = require('@hapi/joi');
const Employee = require("../models").Employee
const Department = require("../models").Department

module.exports = {
    async getEmployees(req, res){
        // try {
            const employees = await Employee.findAll({
                where:{
                    status: true
                },
                include : [
                    { model : Department, as : 'department', attributes: ['id','name'] },
                ],
            });
            if (!employees.length) return res.status(500).send({ message: "Employee not found" });
           
            return res.status(200).send({ status: true , data: employees});
        // } catch (e) {
        //     console.log(e);
        //     return res.status(500).send(e);
        // }
    },

    async subsetPairNotDivisibleByK(req, res)
    {
        const {arr, K} = req.body
        const N = arr.length
// console.log(arr.length)
        // Array for storing frequency of modulo

        // values

        let f = new Array(K);

        for(let i=0;i<K;i++)

        {

            f[i]=0;

        }

        // Fill frequency array with values modulo K

        for (let i = 0; i < N; i++)

            f[arr[i] % K]++;

        // if K is even, then update f[K/2]

        if (K % 2 == 0)

            f[K/2] = Math.min(f[K/2], 1);

        // Initialize result by minimum of 1 or

        // count of numbers giving remainder 0

        let result = Math.min(f[0], 1);
        // console.log(result);
       
        // Choose maximum of count of numbers

        // giving remainder i or K-i

        for (let i = 1; i <= K/2; i++)

            result += Math.max(f[i], f[K-i]);

        return res.status(200).send({ status: true , data: result});

    },

};