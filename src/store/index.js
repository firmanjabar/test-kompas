import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
    state: {
        details: JSON.parse(localStorage.getItem('details')) || [],
        tanggal: JSON.parse(localStorage.getItem('tanggal')) || [],
        thisMonth: new Date().toLocaleString('id-ID', { month: 'long' }),
        thisYear: new Date().getFullYear(),
        totalPerDay: JSON.parse(localStorage.getItem('totalPerDay')) || [],
        spentThisMonth: JSON.parse(localStorage.getItem('spentThisMonth')) || 0
    },
    mutations: {
        setDetails(state, data) {
            state.details = data;
        },
        setTanggal(state, date) {
            state.tanggal = date
        },
        setSendData(state, { price, name }) {
            const tanggal = new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })
            const hours = new Date().getHours()
            const minutes = new Date().getMinutes()
            const jam = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
            const data = {
                id: +new Date(),
                jam,
                tanggal,
                nama: name,
                pengeluaraan: price,
            }
            const newDetails = [data, ...state.details];
            localStorage.setItem('details', JSON.stringify(newDetails))
            state.details = newDetails

            const date = [...new Set(newDetails.map(data => data.tanggal))]
            localStorage.setItem('tanggal', JSON.stringify(date))
            state.tanggal = date

            let total = 0;
            state.details.forEach((detail) => {
                if (detail.tanggal == tanggal) {
                    total += detail.pengeluaraan;
                }
            });
            const tempObj = [...state.totalPerDay, { total, date: tanggal }]
            const uniqDate = tempObj.map(o => o.date)
            const finalTotalPerDay = tempObj.filter(({ date }, index) => !uniqDate.includes(date, index + 1))
            localStorage.setItem('totalPerDay', JSON.stringify(finalTotalPerDay))
            state.totalPerDay = finalTotalPerDay
        },
        setTotalPerDay(state, date) {
            let total = 0;
            let data = [];
            for (let i = 0; i < date.length; i++) {
                state.details.forEach((detail) => {
                    if (detail.tanggal == date[i]) {
                        total += detail.pengeluaraan;
                        data[i] = total;
                    }
                });

                state.totalPerDay.push({ total: data[i], date: date[i] })
                total = 0;
            }
        },
        setSpentThisMonth(state) {
            let total = 0
            state.details.forEach(data => {
                const bulan = data.tanggal.split(" ")[1];
                const tahun = data.tanggal.split(" ")[2];

                if (state.thisMonth == bulan && state.thisYear == tahun) {
                    total += data.pengeluaraan
                }
            })
            localStorage.setItem('spentThisMonth', JSON.stringify(total))
            state.spentThisMonth = total
        }
    },
    actions: {
        async fetchDetails({ commit }) {
            // const res = await axios.get("http://localhost:3000/detail")
            // const date = [...new Set(res.data.map(data => data.tanggal))]
            // commit('setTanggal', date)
            // commit('setDetails', res.data)
            // commit('setSpentThisMonth')
            // commit('setTotalPerDay', date)
        },
    },
    getters: {
        getAllDetails(state) {
            return state.details
        },
        getDates(state) {
            return state.tanggal
        },
        getTotalPerDay(state) {
            return state.totalPerDay
        },
        getThisMonth(state) {
            return state.thisMonth
        },
        getThisYear(state) {
            return state.thisYear
        },
        getSpentThisMonth(state) {
            return state.spentThisMonth
        }
    },

})

export default store