# orm-prototype

**Ruby Installation Instructions**

This is a guide for team members.

First get mpapis public key

```
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
```

Install rvm

```
\curl -sSL https://get.rvm.io | bash
```

Install latest version of ruby at this time

```
rvm install 2.2.3
```

Set 2.2.3 as default version of ruby

```
rvm alias create default 2.2.3
```

You can verify that this worked correctly by typing `vrm list`

To set rvm as system ruby, first we need to set the terminal to default to the bash (login) terminal. In the terminal menu, click Edit > Preferences > Title and Command. Then click "Run Command as Login Shell."

Then type
```rvm use 2.2.3```

This should have set the system ruby to use 2.2.3 through rvm
To verify, log out and back in and type  `which ruby` or `ruby --version`
