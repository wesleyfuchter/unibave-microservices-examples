import http from 'k6/http';
import {check, sleep} from 'k6';

export default function() {
  const url = 'http://localhost/balance-service/balances?accountId=wesley';

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.get(url, params);

  check(res, { 'success creating expense': (r) => r.status === 200 });
  sleep(1);
}