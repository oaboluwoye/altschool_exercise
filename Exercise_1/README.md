# Exercise 1 Submission

## Task
Set up **Ubuntu 20.04 LTS** on a local machine using **Vagrant**.

## Instructions Followed
- Customized the `Vagrantfile` to use:
  ```bash
  config.vm.network "private_network", type: "dhcp"
Brought the VM up with vagrant up.

I ran ifconfig inside the VM to capture network details.

Submission Contents
Vagrantfile (with private network set to DHCP)

ifconfig output (showing network interfaces and assigned IPs)