// #region Global Imports
import "isomorphic-unfetch";
// #endregion Global Imports

// #region Interface Imports
import { HttpModel } from "@Interfaces";
// #endregion Interface Imports

const BaseUrl = `http://localhost:3000/api`;
export const Http = {
  Request: async <A>(methodType: string, url: string, params?: HttpModel.IRequestQueryPayload, payload?: HttpModel.IRequestPayload): Promise<A> => {
    return new Promise((resolve, reject) => {
      fetch(`${BaseUrl}${url}`, {
        body: JSON.stringify(payload),
        cache: "no-cache",
        headers: {
          "content-type": "application/json",
        },
        method: `${methodType}`,
      })
        .then(async (response) => {
          if (response.status === 200) {
            return response.json().then(resolve);
          }
          return reject(response);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
