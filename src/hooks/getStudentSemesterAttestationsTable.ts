import { MonthAttesationsTable } from '../components/Journal/MonthAttestations/MonthAttestationsTable';
import { JournalAttestationT } from '../types/journalAttestation';
import { MonthAttesationsTableAttestationsT, MonthAttestationsFilltersT, MonthAttestationsTableT } from '../types/mothAttestationTable';
import { useState, useMemo, useCallback, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosConfig from "../axiosConfig";
import { endpoints } from "../consts/endpoints";
import { routes } from "../consts/routes";
import { getToken } from "../helpers/auth";
import { getMondaysAndSaturdays } from "../helpers/getModaysAndSaturdays";
import { getStartAndEnd } from "../helpers/getStartAndEndOfWeek";
import { useUserStore } from "../store/userStore";
import { AbsenceTableT, AbsenceTableFilltersT } from "../types/absenceTable";
import _debounce from 'lodash/debounce';

export type StudentSemesterAttestationsT = {
    "columns": [
        {
          "students": [
            {
              "grade": string,
              "student_id": string
            }
          ],
          "subject_name": string,
          "subject_system": number,
          "subject_teacher": string
        }
      ],
      "group_name": string,
      "student_list": [
        {
            "full_name": string,
            "student_id": string
        }
      ],
      year:string
}

export const useGetStudentSemesterAttesationsTable = () => {
    const [table,setTable] = useState<StudentSemesterAttestationsT>();
    const [loading,setLoading] = useState(false);
    const token = useUserStore().user.token || getToken();

    const fetch = async () => {
        setLoading(true);
        console.log("sdfsdsa")
        try{
            const res = await axiosConfig.post(endpoints.studentSemesterAttestations,{headers:{Authorization:token}})

            setTable(res.data.data);
        }catch(err){
            console.error(err);
        }
        setLoading(false);
    }
   

    useEffect(() => {
        fetch();
    },[])

    return {table,loading}
}