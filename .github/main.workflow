workflow "Build, Test and Publish" {
  on = "push"
  resolves = ["test"]
}

action "install" {
  uses = "actions/npm@master"
  args = "ci"
}

action "build" {
  needs = "install"
  uses = "actions/npm@master"
  args = "run build"
}

action "test" {
  needs = ["install", "build"]
  uses = "actions/npm@master"
  args = "test"
}

action "publish" {
  needs = ["build", "test"]
  uses = "action/npm@master"
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
}