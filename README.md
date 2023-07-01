# Curso de Angular 2 (v15+) Typescript do Básico ao Avançado - UDEMY

**Projeto criado para reproduzir o treinamento  Curso de Angular 2 (v15+) Typescript do Básico ao Avançado - UDEMY**

# Links
<https://angular.io/>
<https://vidafullstack.com.br/angular-blog/>

<h4 align="left">
 🚧  Angular.JS 🚀 Em andamento... 🚧
</h4>

## Pré-requisitos

- Instalar o `Node.js + NPM()`
Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web
NPM é um gerenciador de pacotes para o Node.JS npm

- verificar versão Node e NPM
```node -v```
```npm -v```



- Instalar as dependências
```npm install```

- Instalar o Angular CLI
```npm install -g @angular/cli```

- Novo projeto angular
```ng new nome-projeto```

- Iniciar servidor
```ng serve```

- Criar componente
```ng generate component title```


- Criar modulo (Possui um grupo de componentes)
```ng generate module nomepasta_shared```

- Ciclos de vida Angular
```ngOnInit()```
```ngOnChanges()```
```ngDocheck()```
```ngAfterContentInit()```
```ngAfterContentChecked()```
```ngAfterViewInit()```
```ngAfterViewChecked()```
```ngOnDestroy```

- Em app.modules adicionar FormsModule para reconhecer o NgModel

 ```
 imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ]
  ```
