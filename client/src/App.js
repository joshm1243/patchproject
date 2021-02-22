export default {
  name: 'App',
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    testFunction() {
      alert(`Username: ${this.username}\nPassword: ${this.password}`);
    }
  },
  render() {
    return (
      <div class="container h-100">
        <div class="d-flex justify-content-center align-items-center h-100">
          <b-card
            text-variant="white"
            bg-variant="transparent"
            class="justify-content-center text-center border-0"
            style="width: 35rem;"
          >
            <b-card-text class="mb-4 mb-md-5" style="font-size: 8rem; line-height: 0.55;">Patch</b-card-text>
            <b-form onSubmit={this.testFunction}>
              <b-form-group
                class="mb-1 mb-md-4"
                id="input-group-1"
                label="Username"
                label-for="username"
              >
                <b-form-input
                  v-model={this.username}
                  id="input-1"
                  type="text"
                  placeholder="Enter username"
                  size="lg"
                  required
                />
              </b-form-group>

              <b-form-group
                class="mb-1 mb-md-4"
                id="input-group-2"
                label="Password"
                label-for="password"
              >
                <b-form-input
                  v-model={this.password}
                  id="input-2"
                  type="password"
                  placeholder="Enter password"
                  size="lg"
                  required
                />
              </b-form-group>
              <b-button type="submit" size="lg" class="col-12 mt-2" variant="primary">Login</b-button>
            </b-form>
          </b-card>
        </div>
      </div>
    )
  }
}