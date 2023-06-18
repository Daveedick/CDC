import { unref }               from 'vue';
import { useRouter, useRoute } from 'vue-router';

const queryRules = {

};

const parseQuery = (query = {}) => {
	Object.keys(query).forEach((key) => {
		if (queryRules[key]) {
			query[key] = queryRules[key].parse(query[key]);
		}
	});
	return query;
};

const stringifyQuery = (query = {}) => {
	Object.keys(query).forEach((key) => {
		if (queryRules[key]) {
			query[key] = queryRules[key].stringify(query[key]);
		}
	});
	return query;
};

export const useQuery = (handledParameters = []) => {
	const route  = useRoute();
	const router = useRouter();

	const filterQueryObject = (queryObject) => {
		queryObject = unref(queryObject);
		return Object.fromEntries(Object.entries(queryObject).filter(([key]) => handledParameters.includes(key)));
	};

	const filterOldQuery = (oldQuery) => {
		const filtered = Object.entries(oldQuery).filter(([key]) => !handledParameters.includes(key));
		return Object.fromEntries(filtered);
	};

	const getQueryObject            = () => parseQuery(filterQueryObject(route.query));
	const getStringifiedQueryObject = () => stringifyQuery(filterQueryObject(route.query));

	/*
     * use {useHistory:false} as options to use router.replace, that does not add an entry in the browser history
     */
	const updateQuery = (queryObject, options = { useHistory : true }) => {
		const filteredQuery = stringifyQuery(filterQueryObject(queryObject));
		const oldQuery      = filterOldQuery(route.query);
		const combined      = { ...oldQuery, ...filteredQuery };
		const  mode         = options.useHistory ? 'push' : 'replace' ;
		router[mode]({ query : combined });
	};

	const rewriteQuery = (queryObject) => {
		const filteredQuery = stringifyQuery(filterQueryObject(queryObject));
		router.push({ query : filteredQuery });
	};

	const updateSingleQueryItem = (key, value) => {
		if (handledParameters.includes(key)) {
			const stringified = stringifyQuery({ [key] : value });
			const oldQuery    = route.query;
			const combined    = { ...oldQuery, ...stringified };
			router.push({ query : combined });
		}
	};

	return { getQueryObject, updateQuery, rewriteQuery, updateSingleQueryItem, getStringifiedQueryObject };
};
