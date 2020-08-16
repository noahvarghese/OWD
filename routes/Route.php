<?php

class Route
{
    private Request $request;
    // When adding support for put/delete add to this array
    private array $supportedHttpMethods = [
        "GET",
        "POST"
    ];

    public function __construct(IRequest $request)
    {
        $this->request = $request;
    }

    public function __call(string $name, array $arguments): void
    {
        list($route, $method) = $arguments;

        if (in_array(strtoupper($name), $this->supportedHttpMethods) === false) {
            $this->invalidMethodHandler();
        }

        $this->{strtolower($name)}[$this->formatRoute($route)] = $method;
    }

    /**
     * Removes trailing forward slashes from the right of the route
     * @param route (string)
     */
    private function formatRoute(string $route): string
    {
        $result = rtrim($route, '/');

        if ($result === '') {
            return '/';
        }

        return $result;
    }

    private function invalidMethodHandler(): void
    {
        header("{$this->request->serverProtocol} 405 Method Not Allowed");
    }

    private function defaultRequestHandler(): void
    {
        header("{$this->request->serverProtocol} 404 Not Found");
    }

    /**
     * Resolves a route
     */
    public function resolve(): void
    {
        $methodDictionary = $this->{strtolower($this->request->requestMethod)};
        $formattedRoute = $this->formatRoute($this->request->requestUri);
        $method = $methodDictionary[$formattedRoute];

        if (is_null($method)) {
            $this->defaultRequestHandler();
            return;
        }

        echo call_user_func_array($method, [$this->request]);
    }

    public function __destruct()
    {
        $this->resolve();
    }
}
