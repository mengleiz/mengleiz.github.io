---
title: Cellular Network Slicing
---

(cards-mx-cellular-slicing)=
# Cellular Network Slicing

![cellular_slicing](cellular_slicing.png)

In the Cellular Network Slicing environment, the entire network is partitioned into multiple slices, each tailored to serve distinct user groups. Utilizing its perceptive observations, the agent possesses the ability to allocate network resources, like resource blocks, to each slice with great efficiency.

Within each slice, the agent can designate resources as dedicated, prioritized, or shared as needed. Meanwhile, for users belonging to the same slice, the Cellular MAC scheduler implements the proportional fair algorithm, guaranteeing an equitable and impartial distribution of resources among them.

| | |
| ----- | ---- |
| Action Space    |  `TODO`  |
| Observation Space | `TODO`  |
| Arguments | [config.json](https://github.com/IntelLabs/gma/tree/network-gym/network_gym_client/envs/network_slicing/config.json)  |
| Select Environment | `config_json = load_config_file('network_slicing')` <br> `env = NetworkGymEnv(client_id, config_json)`  |

## Description

In the Network Slicing environment, resource scheduling poses as a challenge, with multiple slices competing for the network's finite resources. The primary objective of resource scheduling is to strategically allocate these resources among slices using dedicated, prioritized, and shared resources, all while striving to meet the service level agreements for each slice.

## Prerequisite

Before using the Multi-Access (MX) Traffic Splitting environment, ensure that you have access to the NetworkGym Server on [vLab](https://registration.intel-research.net/) machines and have downloaded the [NetworkGymClient](https://github.com/IntelLabs/gma/tree/network-gym).

## Observation Space

TODO


````{Note}

```{eval-rst}
The Observation Space can be customized in the :meth:`network_gym_client.envs.network_slicing.Adapter.prepare_observation` function.
```
````

```{tip}
The Observation Space can be normalized using the [NormalizeObservation](https://gymnasium.farama.org/_modules/gymnasium/wrappers/normalize/#NormalizeObservation) wrapper.
```

## Action Space
TODO

```{tip}
The Action Space can be rescaled using the [RescaleAction](https://gymnasium.farama.org/_modules/gymnasium/wrappers/rescale_action/) wrapper.
```

## Transition Dynamics
TODO

## Reward

TODO

````{Note}

```{eval-rst}
The Reward can be customized in the :meth:`network_gym_client.envs.network_slicing.Adapter.prepare_reward` function.
```
````

## Arguments

All the network configurable parameters are defined in the JSON files. When the client starts, the JSON files will be loaded and transmitted to the server to configure the environment.
See the [NetworkGymClient](https://github.com/IntelLabs/gma/tree/network-gym#%EF%B8%8F-configurable-file-format) for more details.

## Starting State
The position of the users is assigned by a uniform random value in a 2D plane with configurable (x, y) boundaries. The starting velocity of the users and other parameters can also be configured in the JSON file.

## Episode End
A NetworkGym environment operates for a specified number of episodes, denoted as episodes_per_session (E), and each episode is truncated after a certain number of time steps, denoted as steps_per_episode (L). Resulting in E*L time steps per environment session. Both E and L can be customized through JSON configuration files.
The episode ends if either of the following happens:
1. Truncation: The length of each episode is L steps. Once an episode is truncated, the environment continues to run, generating results for the subsequent episode. It’s important to note that the environment parameters cannot be reconfigured after the end of a truncated episode.
2. Termination: The environment terminates after E episodes. At this point, the agent has the option to reconfigure the environment to continue training or to exit the program entirely.

```{tip}
See [Handling Time Limits](../../tutorials/handling_time_limits.md) for more details about Episode End.
```