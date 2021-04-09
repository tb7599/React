import axios from 'axios'
const DIAG_TEST_BASE_URL='http://localhost:9000/hcdtc/';

class DiagnosticTestService{
    addTest(test){
        return axios.post(DIAG_TEST_BASE_URL+'/addTest',test)
    }
}
export default new DiagnosticTestService()