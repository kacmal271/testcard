import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
const RedirectController231f30cc14cbd7cc13ff2e125d2cab43 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url(options),
    method: 'get',
})

RedirectController231f30cc14cbd7cc13ff2e125d2cab43.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/testcard',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url = (options?: RouteQueryOptions) => {
    return RedirectController231f30cc14cbd7cc13ff2e125d2cab43.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
RedirectController231f30cc14cbd7cc13ff2e125d2cab43.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
RedirectController231f30cc14cbd7cc13ff2e125d2cab43.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
RedirectController231f30cc14cbd7cc13ff2e125d2cab43.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
RedirectController231f30cc14cbd7cc13ff2e125d2cab43.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
RedirectController231f30cc14cbd7cc13ff2e125d2cab43.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
RedirectController231f30cc14cbd7cc13ff2e125d2cab43.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
RedirectController231f30cc14cbd7cc13ff2e125d2cab43.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
    const RedirectController231f30cc14cbd7cc13ff2e125d2cab43Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
        RedirectController231f30cc14cbd7cc13ff2e125d2cab43Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
        RedirectController231f30cc14cbd7cc13ff2e125d2cab43Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
        RedirectController231f30cc14cbd7cc13ff2e125d2cab43Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
        RedirectController231f30cc14cbd7cc13ff2e125d2cab43Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
        RedirectController231f30cc14cbd7cc13ff2e125d2cab43Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
        RedirectController231f30cc14cbd7cc13ff2e125d2cab43Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard'
 */
        RedirectController231f30cc14cbd7cc13ff2e125d2cab43Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController231f30cc14cbd7cc13ff2e125d2cab43.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    RedirectController231f30cc14cbd7cc13ff2e125d2cab43.form = RedirectController231f30cc14cbd7cc13ff2e125d2cab43Form
    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
const RedirectController30862725f369567a1c34714dd94cf115 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController30862725f369567a1c34714dd94cf115.url(options),
    method: 'get',
})

RedirectController30862725f369567a1c34714dd94cf115.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/testcard/settings',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
RedirectController30862725f369567a1c34714dd94cf115.url = (options?: RouteQueryOptions) => {
    return RedirectController30862725f369567a1c34714dd94cf115.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
RedirectController30862725f369567a1c34714dd94cf115.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController30862725f369567a1c34714dd94cf115.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
RedirectController30862725f369567a1c34714dd94cf115.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController30862725f369567a1c34714dd94cf115.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
RedirectController30862725f369567a1c34714dd94cf115.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController30862725f369567a1c34714dd94cf115.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
RedirectController30862725f369567a1c34714dd94cf115.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController30862725f369567a1c34714dd94cf115.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
RedirectController30862725f369567a1c34714dd94cf115.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController30862725f369567a1c34714dd94cf115.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
RedirectController30862725f369567a1c34714dd94cf115.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController30862725f369567a1c34714dd94cf115.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
RedirectController30862725f369567a1c34714dd94cf115.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController30862725f369567a1c34714dd94cf115.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
    const RedirectController30862725f369567a1c34714dd94cf115Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: RedirectController30862725f369567a1c34714dd94cf115.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
        RedirectController30862725f369567a1c34714dd94cf115Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController30862725f369567a1c34714dd94cf115.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
        RedirectController30862725f369567a1c34714dd94cf115Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController30862725f369567a1c34714dd94cf115.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
        RedirectController30862725f369567a1c34714dd94cf115Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController30862725f369567a1c34714dd94cf115.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
        RedirectController30862725f369567a1c34714dd94cf115Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController30862725f369567a1c34714dd94cf115.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
        RedirectController30862725f369567a1c34714dd94cf115Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController30862725f369567a1c34714dd94cf115.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
        RedirectController30862725f369567a1c34714dd94cf115Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController30862725f369567a1c34714dd94cf115.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/testcard/settings'
 */
        RedirectController30862725f369567a1c34714dd94cf115Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController30862725f369567a1c34714dd94cf115.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    RedirectController30862725f369567a1c34714dd94cf115.form = RedirectController30862725f369567a1c34714dd94cf115Form

/**
* Multiple routes resolve to \Illuminate\Routing\RedirectController::RedirectController, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `RedirectController['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const RedirectController = {
    '/testcard': RedirectController231f30cc14cbd7cc13ff2e125d2cab43,
    '/testcard/settings': RedirectController30862725f369567a1c34714dd94cf115,
}

export default RedirectController