import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CardController::index
 * @see app/Http/Controllers/CardController.php:16
 * @route '/testcard/cards'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/testcard/cards',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CardController::index
 * @see app/Http/Controllers/CardController.php:16
 * @route '/testcard/cards'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CardController::index
 * @see app/Http/Controllers/CardController.php:16
 * @route '/testcard/cards'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CardController::index
 * @see app/Http/Controllers/CardController.php:16
 * @route '/testcard/cards'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CardController::index
 * @see app/Http/Controllers/CardController.php:16
 * @route '/testcard/cards'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CardController::index
 * @see app/Http/Controllers/CardController.php:16
 * @route '/testcard/cards'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CardController::index
 * @see app/Http/Controllers/CardController.php:16
 * @route '/testcard/cards'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\CardController::create
 * @see app/Http/Controllers/CardController.php:39
 * @route '/testcard/cards/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/testcard/cards/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CardController::create
 * @see app/Http/Controllers/CardController.php:39
 * @route '/testcard/cards/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CardController::create
 * @see app/Http/Controllers/CardController.php:39
 * @route '/testcard/cards/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CardController::create
 * @see app/Http/Controllers/CardController.php:39
 * @route '/testcard/cards/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CardController::create
 * @see app/Http/Controllers/CardController.php:39
 * @route '/testcard/cards/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CardController::create
 * @see app/Http/Controllers/CardController.php:39
 * @route '/testcard/cards/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CardController::create
 * @see app/Http/Controllers/CardController.php:39
 * @route '/testcard/cards/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\CardController::store
 * @see app/Http/Controllers/CardController.php:47
 * @route '/testcard/cards'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/testcard/cards',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CardController::store
 * @see app/Http/Controllers/CardController.php:47
 * @route '/testcard/cards'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CardController::store
 * @see app/Http/Controllers/CardController.php:47
 * @route '/testcard/cards'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CardController::store
 * @see app/Http/Controllers/CardController.php:47
 * @route '/testcard/cards'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CardController::store
 * @see app/Http/Controllers/CardController.php:47
 * @route '/testcard/cards'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CardController::show
 * @see app/Http/Controllers/CardController.php:29
 * @route '/testcard/cards/{card}'
 */
export const show = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/testcard/cards/{card}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CardController::show
 * @see app/Http/Controllers/CardController.php:29
 * @route '/testcard/cards/{card}'
 */
show.url = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { card: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { card: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    card: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        card: typeof args.card === 'object'
                ? args.card.id
                : args.card,
                }

    return show.definition.url
            .replace('{card}', parsedArgs.card.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CardController::show
 * @see app/Http/Controllers/CardController.php:29
 * @route '/testcard/cards/{card}'
 */
show.get = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CardController::show
 * @see app/Http/Controllers/CardController.php:29
 * @route '/testcard/cards/{card}'
 */
show.head = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CardController::show
 * @see app/Http/Controllers/CardController.php:29
 * @route '/testcard/cards/{card}'
 */
    const showForm = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CardController::show
 * @see app/Http/Controllers/CardController.php:29
 * @route '/testcard/cards/{card}'
 */
        showForm.get = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CardController::show
 * @see app/Http/Controllers/CardController.php:29
 * @route '/testcard/cards/{card}'
 */
        showForm.head = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\CardController::edit
 * @see app/Http/Controllers/CardController.php:61
 * @route '/testcard/cards/{card}/edit'
 */
export const edit = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/testcard/cards/{card}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CardController::edit
 * @see app/Http/Controllers/CardController.php:61
 * @route '/testcard/cards/{card}/edit'
 */
edit.url = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { card: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { card: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    card: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        card: typeof args.card === 'object'
                ? args.card.id
                : args.card,
                }

    return edit.definition.url
            .replace('{card}', parsedArgs.card.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CardController::edit
 * @see app/Http/Controllers/CardController.php:61
 * @route '/testcard/cards/{card}/edit'
 */
edit.get = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CardController::edit
 * @see app/Http/Controllers/CardController.php:61
 * @route '/testcard/cards/{card}/edit'
 */
edit.head = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CardController::edit
 * @see app/Http/Controllers/CardController.php:61
 * @route '/testcard/cards/{card}/edit'
 */
    const editForm = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CardController::edit
 * @see app/Http/Controllers/CardController.php:61
 * @route '/testcard/cards/{card}/edit'
 */
        editForm.get = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CardController::edit
 * @see app/Http/Controllers/CardController.php:61
 * @route '/testcard/cards/{card}/edit'
 */
        editForm.head = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\CardController::update
 * @see app/Http/Controllers/CardController.php:71
 * @route '/testcard/cards/{card}'
 */
export const update = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/testcard/cards/{card}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\CardController::update
 * @see app/Http/Controllers/CardController.php:71
 * @route '/testcard/cards/{card}'
 */
update.url = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { card: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { card: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    card: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        card: typeof args.card === 'object'
                ? args.card.id
                : args.card,
                }

    return update.definition.url
            .replace('{card}', parsedArgs.card.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CardController::update
 * @see app/Http/Controllers/CardController.php:71
 * @route '/testcard/cards/{card}'
 */
update.put = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\CardController::update
 * @see app/Http/Controllers/CardController.php:71
 * @route '/testcard/cards/{card}'
 */
update.patch = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\CardController::update
 * @see app/Http/Controllers/CardController.php:71
 * @route '/testcard/cards/{card}'
 */
    const updateForm = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CardController::update
 * @see app/Http/Controllers/CardController.php:71
 * @route '/testcard/cards/{card}'
 */
        updateForm.put = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\CardController::update
 * @see app/Http/Controllers/CardController.php:71
 * @route '/testcard/cards/{card}'
 */
        updateForm.patch = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\CardController::destroy
 * @see app/Http/Controllers/CardController.php:93
 * @route '/testcard/cards/{card}'
 */
export const destroy = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/testcard/cards/{card}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CardController::destroy
 * @see app/Http/Controllers/CardController.php:93
 * @route '/testcard/cards/{card}'
 */
destroy.url = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { card: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { card: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    card: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        card: typeof args.card === 'object'
                ? args.card.id
                : args.card,
                }

    return destroy.definition.url
            .replace('{card}', parsedArgs.card.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CardController::destroy
 * @see app/Http/Controllers/CardController.php:93
 * @route '/testcard/cards/{card}'
 */
destroy.delete = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CardController::destroy
 * @see app/Http/Controllers/CardController.php:93
 * @route '/testcard/cards/{card}'
 */
    const destroyForm = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CardController::destroy
 * @see app/Http/Controllers/CardController.php:93
 * @route '/testcard/cards/{card}'
 */
        destroyForm.delete = (args: { card: string | number | { id: string | number } } | [card: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const CardController = { index, create, store, show, edit, update, destroy }

export default CardController